namespace UniVerify.Models
{
    public class VerifyResult
    {
        public Guid TextId { get; set; }

        public Guid BestMatchedTextId { get; set; }

        public SimilarityResult[]? BestMatchedSentences { get; set; }

        public double UniquePercent { get; set; }

        public DateTime VerifyDate { get; set; }
    }
}
