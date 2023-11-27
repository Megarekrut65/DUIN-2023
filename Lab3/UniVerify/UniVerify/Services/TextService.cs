using Microsoft.EntityFrameworkCore;
using UniVerify.Models;

namespace UniVerify.Services
{
    public class TextService : ITextService
    {
        private readonly ApplicationDbContext _dbContext;

        public TextService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddText(Text text, User user)
        {
            _dbContext.Add(text);
            _dbContext.SaveChanges();
        }


        public IEnumerable<Text> GetList(User user)
        {
            return _dbContext.Texts?.Where(text => text.Owner.Equals(user))
                .Include(text => text.Owner)
                .ToList() ?? new List<Text>();
        }

        public Text? GetText(Guid id)
        {
            return _dbContext.Texts?.Where(text => text.Id.Equals(id))
                .Include(text=>text.Owner).FirstOrDefault();
        }

        public void RemoveText(Guid id, User user)
        {
            Text? text = GetText(id);
            if (text == null) throw new Exception("Text not found");
            if (text.Owner != user) throw new Exception("You don't have access to this text!");

            try
            {
                _dbContext.Texts!.Remove(text);
            }
            catch { throw; }
            finally { _dbContext.SaveChanges(); }
        }

        public void UpdateText(Guid id, TextModel model, User user)
        {
            Text? text = GetText(id);
            if (text == null) throw new Exception("Text not found");
            if (text.Owner != user) throw new Exception("You don't have access to this text!");

            text.Title = model.Title;
            text.Content = model.Content;
            text.LastUpdate = DateTime.UtcNow;

            try
            {
                _dbContext.Texts!.Update(text);
            }
            catch { throw; }
            finally { _dbContext.SaveChanges(); }
        }
    }
}
