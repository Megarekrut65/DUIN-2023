using Microsoft.AspNetCore.Identity;
using UniVerify.Models;

namespace UniVerify.Services
{
    public interface IUserService
    {
        public bool IsUserUnique(string username);
        public bool IsEmailUnique(string email);

        public void AddUser(UserRegisterInput model);

        public User? GetUser(string username);
    }
}
