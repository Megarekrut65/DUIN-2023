using UniVerify.Models;
using UniVerify.Models.Text;

namespace UniVerify.Services
{
    public interface IVerifyUniqueService
    {
        public double GetUniqueShort(Text text);

        public VerifyResult GetUniqueFull(Text text);
    }
}
