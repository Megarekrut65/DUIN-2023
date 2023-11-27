using Microsoft.AspNetCore.Identity;
using UniVerify.Models;

namespace UniVerify.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _dbContext;

        public UserService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        public void AddUser(UserModel model)
        {
            User user = new User(model.Username, model.Email, model.Password);

            _dbContext.Add(user);
            _dbContext.SaveChanges();
        }

        public User? GetUser(string username)
        {
            return _dbContext.Users?.FirstOrDefault(user => user.Username!.Equals(username));
        }

        public bool IsEmailUnique(string email)
        {
            return _dbContext.Users?.Where(user => user.Email!.Equals(email)).Count() == 0;
        }

        public bool IsUserUnique(string username)
        {
            return _dbContext.Users?.Where(user => user.Username!.Equals(username)).Count() == 0;
        }
    }
}
