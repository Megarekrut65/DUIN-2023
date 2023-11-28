using Microsoft.EntityFrameworkCore;
using UniVerify.Models;

namespace UniVerify.Services
{
    public class VerifyUniqueService : IVerifyUniqueService
    {
        private readonly ApplicationDbContext _dbContext;

        public VerifyUniqueService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        private List<Text> GetTesxts(Text target)
        {
            return _dbContext.Texts?
                .Where(text => !text.Id.Equals(target.Id)
                    && (!text.PrivateContent || text.Owner.Equals(target.Owner)))
                .Include(text => text.Owner)
                .ToList() ?? new List<Text>();
        }

        public VerifyResult GetUniqueFull(Text target)
        {
            List<Text> texts = GetTesxts(target);

            VerifyResult maxResult = new VerifyResult { UniquePercent=100};
            double uniqueSum = 0;

            foreach (Text other in texts)
            {
                VerifyResult resl = VerifyManager.VerifyFull(target, other);

                if (resl.UniquePercent < maxResult.UniquePercent)
                {
                    maxResult.UniquePercent = resl.UniquePercent;
                    maxResult.BestMatchedSentences = resl.BestMatchedSentences;
                    maxResult.BestMatchedTextId = other.Id;
                }

                uniqueSum += resl.UniquePercent;
            }

            maxResult.TextId = target.Id;
            maxResult.UniquePercent = uniqueSum / texts.Count;
            maxResult.VerifyDate = DateTime.UtcNow;

            return maxResult;
        }

        public double GetUniqueShort(Text target)
        {
            List<Text> texts = GetTesxts(target);

            double uniqueSum = 0;

            foreach (Text other in texts)
            {
                VerifyResult resl = VerifyManager.VerifyFull(target, other);

                uniqueSum += resl.UniquePercent;
            }

            return uniqueSum / texts.Count;
        }
    }
}
