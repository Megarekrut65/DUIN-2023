using Microsoft.AspNetCore.Mvc;
using UniVerify.Controllers;
using UniVerify.Models;
using UniVerify.Models.Text;
using UniVerify.Services;

namespace UniVerify
{
    public class TextUtility
    {
        private readonly ITextService _textService;
        private readonly IUserService _userService;

        public TextUtility(ITextService textService,
            IUserService userService)
        {
            _textService = textService;
            _userService = userService;
        }

        public Text GetText(string id, string username)
        {
            Guid guid;
            try
            {
                guid = Guid.Parse(id);
            }
            catch
            {
                throw new Exception("Incorrect id!");
            }

            User user = _userService.GetUser(username)!;

            Text? text;

            text = _textService.GetText(guid, user);

            if (text == null)
            {
                throw new Exception("Text not found!");
            }

            return text;
        }
    }
}
