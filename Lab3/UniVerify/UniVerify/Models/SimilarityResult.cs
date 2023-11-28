namespace UniVerify.Models
{
    public class SimilarityResult
    {
        public string TargetText { get; set; }
        public string FoundText { get; set; }

        public double LocalSimilarity { get; set; }
    }
}
