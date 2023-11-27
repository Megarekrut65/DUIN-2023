using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models
{

    public class UserModel
    {
        [Required]
        [MaxLength(100)]
        public string Username { get; set; }

        [Required]
        [MaxLength(200)]
        public string Email { get; set; }

        [Required]
        [StringLength(maximumLength: 1000, MinimumLength = 8)]
        public string Password { get; set; }

        
    }

    public class UserModelAuth
    {
        [Required]
        [MaxLength(100)]
        public string Username { get; set; }

        [Required]
        [StringLength(maximumLength: 1000, MinimumLength = 8)]
        public string Password { get; set; }
    }
}