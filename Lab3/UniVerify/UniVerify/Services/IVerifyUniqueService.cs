using UniVerify.Models;

namespace UniVerify.Services
{
    public interface IVerifyUniqueService
    {
        public double GetUniqueShort(Text text);

        public VerifyResult GetUniqueFull(Text text);
    }
}
