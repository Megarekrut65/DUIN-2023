using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using UniVerify.Models;
using UniVerify.Services;

namespace UniVerify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TextController : ControllerBase
    {
        private readonly ILogger<TextController> _logger;
        private readonly ITextService _textService;
        private readonly IUserService _userService;

        public TextController(ILogger<TextController> logger, ITextService textService,
            IUserService userService)
        {
            _logger = logger;
            _textService = textService;
            _userService = userService;
        }

        [Authorize]
        [HttpPost]
        public IActionResult PostText([FromBody][Required] TextModel model) {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User user = _userService.GetUser(User.Identity!.Name!)!;
            Text text = new Text(model.Title, model.Content, model.PrivateContent, user);

            _textService.AddText(text, user);

            return Ok(new { Id=text.Id });
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetText(string id)
        {
            Guid guid;
            try
            {
                guid = Guid.Parse(id);
            }
            catch
            {
                return BadRequest(new { Error = "Incorrect id!" });
            }

            User user = _userService.GetUser(User.Identity!.Name!)!;

            Text? text;

            try
            {
                text = _textService.GetText(guid, user);   
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            if (text == null)
            {
                return BadRequest(new { Error = "Text not found!" });
            }

            return Ok(ConvertText(text));
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeleteText(string id)
        {
            User user = _userService.GetUser(User.Identity!.Name!)!;

            Guid guid;
            try
            {
                guid = Guid.Parse(id);
            }
            catch
            {
                return BadRequest(new { Error = "Incorrect id!" });
            }

            try
            {
                _textService.RemoveText(guid, user);
            }
            catch(Exception ex)
            { 
                return BadRequest(new { Error = ex.Message });
            }

            return Ok(new { Result="Removed"});
        }

        [Authorize]
        [HttpPut("{id}")]
        public IActionResult UpdateText(string id, [FromBody][Required] TextModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User user = _userService.GetUser(User.Identity!.Name!)!;

            Guid guid;
            try
            {
                guid = Guid.Parse(id);
            }
            catch
            {
                return BadRequest(new { Error = "Incorrect id!" });
            }

            try
            {
                _textService.UpdateText(guid, model, user);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            return GetText(id);
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<object> GetTexts()
        {
            User user = _userService.GetUser(User.Identity!.Name!)!;
            
            return _textService.GetList(user).Select(ConvertText);
        }

        private object ConvertText(Text text)
        {
            return new { Id = text.Id, 
                
                Title = text.Title, 
                Content = text.Content, 
                PrivateContent = text.PrivateContent,
                LastUpdate = text.LastUpdate, 
                Created=text.Created, 
                LastSimilarity = text.LastSimilarity, 
                Owner=text.Owner.Username};
        }
    }
}
