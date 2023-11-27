using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using UniVerify.Models;
using UniVerify.Services;

namespace UniVerify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;

        public UserController(ILogger<UserController> logger, IUserService userService, 
            IConfiguration configuration)
        {
            _logger = logger;
            _userService = userService;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody][Required] UserModelAuth model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            User? user = _userService.GetUser(model.Username);
            if (user == null)
            {
                return BadRequest(new {Error="Username or password incorrect!"});
            }

            if (!user.VerifyPassword(model.Password))
            {
                return BadRequest(new { Error = "Username or password incorrect!" });
            }

            var token = GenerateJwtToken(model.Username);
            return Ok(new { Token = token });
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody][Required] UserModel model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(!_userService.IsUserUnique(model.Username))
            {
                return BadRequest(new {Error="User with this name already exists!"});
            }

            if (!_userService.IsEmailUnique(model.Email))
            {
                return BadRequest(new { Error = "User with this email already exists!" });
            }

            try
            {
                _userService.AddUser(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Login(new UserModelAuth { Username=model.Username, Password=model.Password});
        }

        private string GenerateJwtToken(string username)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim> { new Claim(ClaimTypes.Name, username) };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds,
                claims: claims
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
