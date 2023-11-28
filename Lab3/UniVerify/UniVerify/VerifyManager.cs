using System.Collections.Generic;
using System.Text.RegularExpressions;
using UniVerify.Migrations;
using UniVerify.Models;

namespace UniVerify
{
    public class VerifyManager
    {
        private const double SimilarityError = 30;
        private const double MinSimilarity = 70;
        private const int MaxCount = 5;

        public static VerifyResult VerifyFull(Text target, Text other)
        {
            List<string> sentences1 = CombineStrings(GetSentences(target.Content));
            List<string> sentences2 = CombineStrings(GetSentences(other.Content));

            List<SimilarityResult> matches = new List<SimilarityResult>();

            double sumSimilarity = 0;

            for (int i = 0; i < sentences1.Count; i++)
            {
                SimilarityResult match = FindMostSimilarSentence(sentences1[i], sentences2);
                matches.Add(match);

                if (match.LocalSimilarity > SimilarityError)
                {
                    sumSimilarity += match.LocalSimilarity;
                }
            }

            double similarity = sumSimilarity / sentences1.Count;

            SimilarityResult[] sentences = matches
                .FindAll((match) => match.LocalSimilarity > MinSimilarity)
                .OrderByDescending(match => match.LocalSimilarity).Take(MaxCount).ToArray();


            VerifyResult result = new VerifyResult {BestMatchedSentences=sentences, 
                UniquePercent=100-similarity};

            return result;
        }
        public static double VerifyShort(Text target, Text other)
        {
            List<string> sentences1 = GetSentences(target.Content);
            List<string> sentences2 = GetSentences(other.Content);

           
            double sumSimilarity = 0;

            for (int i = 0; i < sentences1.Count; i++)
            {
                SimilarityResult result = FindMostSimilarSentence(sentences1[i], sentences2);

                if (result.LocalSimilarity > SimilarityError)
                {
                    sumSimilarity += result.LocalSimilarity;
                }
            }

            double similarity = sumSimilarity / sentences1.Count;


            return 100 - similarity;
        }
        private static List<string> GetSentences(string text)
        {
            return text.Split(new[] { '.', '!', '?', ';', '\n' },
            StringSplitOptions.RemoveEmptyEntries)
                .Select(item => Regex.Replace(item, @"[^a-zA-Z0-9]", "").Trim())
                .Where(item=>item.Length > 0)
                .ToList();
        }
        private static SimilarityResult FindMostSimilarSentence(string referenceSentence, List<string> sentences)
        {
            double maxSimilarity = 0;
            string mostSimilarSentence = "";

            foreach (string sentence in sentences)
            {
                double similarity = GetCosineSimilarity(referenceSentence, sentence);

                if (similarity > maxSimilarity)
                {
                    maxSimilarity = similarity;
                    mostSimilarSentence = sentence;
                }
            }

            sentences.Remove(mostSimilarSentence);

            return new SimilarityResult { TargetText= referenceSentence, FoundText=mostSimilarSentence, 
                LocalSimilarity=maxSimilarity*100};
        }

        private static double GetCosineSimilarity(string text1, string text2)
        {
            var vector1 = text1.ToLower().Split(' ').Distinct().OrderBy(x => x).ToList();
            var vector2 = text2.ToLower().Split(' ').Distinct().OrderBy(x => x).ToList();

            var intersection = vector1.Intersect(vector2).Count();

            double magnitude1 = Math.Sqrt(vector1.Count);
            double magnitude2 = Math.Sqrt(vector2.Count);

            if (magnitude1 == 0 || magnitude2 == 0)
            {
                return 0.0;
            }

            return intersection / (magnitude1 * magnitude2);
        }
        private static List<string> CombineStrings(List<string> inputList)
        {
            List<string> combinedList = new List<string>();
            string currentCombinedString = "";

            foreach (var str in inputList)
            {
                if ((currentCombinedString + str).Length >= 20)
                {
                    combinedList.Add(currentCombinedString);
                    currentCombinedString = str;
                }
                else
                {
                    currentCombinedString += str;
                }
            }

            if (!string.IsNullOrEmpty(currentCombinedString))
            {
                combinedList.Add(currentCombinedString);
            }

            return combinedList;
        }
    }
}
