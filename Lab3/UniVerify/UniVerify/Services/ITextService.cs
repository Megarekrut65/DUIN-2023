using UniVerify.Models;

namespace UniVerify.Services
{
    public interface ITextService
    {
        void AddText(Text text, User user);
        void RemoveText(Guid id, User user);
        void UpdateText(Guid id, TextModel model, User user);

        Text? GetText(Guid id);

        IEnumerable<Text> GetList(User user);
    }
}
