using UniVerify.Models;
using UniVerify.Models.Text;

namespace UniVerify.Services
{
    public interface ITextService
    {
        void AddText(Text text, User user);
        void RemoveText(Guid id, User user);
        void UpdateText(Guid id, TextModel model, User user);
        void UpdateFull(Text text);

        Text? GetText(Guid id, User user);

        IEnumerable<Text> GetList(User user);
    }
}
