﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using UniVerify.Models;
using UniVerify.Models.Text;
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

        private readonly TextUtility _textUtility;

        public TextController(ILogger<TextController> logger, ITextService textService,
            IUserService userService)
        {
            _logger = logger;
            _textService = textService;
            _userService = userService;

            _textUtility = new TextUtility(_textService, _userService);
        }

        [Authorize]
        [HttpPost]
        public IActionResult PostText([FromBody][Required] TextInput model) {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User? user = _userService.GetUser(User.Identity?.Name??"");
            if(user == null)
            {
                return BadRequest(new {Error="Invalid token"});
            }
            Text text = new Text(model.Title, model.Content, model.PrivateContent, user);

            _textService.AddText(text, user);

            return Ok(new { Id=text.Id });
        }

        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<TextResult> GetText(string id)
        {
            Text text;

            try
            {
                text = _textUtility.GetText(id, User.Identity!.Name!);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            return Ok(ToTextResult(text));
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeleteText(string id)
        {
            User? user = _userService.GetUser(User.Identity?.Name ?? "");
            if (user == null)
            {
                return BadRequest(new { Error = "Invalid token" });
            }

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
        public ActionResult<TextResult> UpdateText(string id, [FromBody][Required] TextInput model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User? user = _userService.GetUser(User.Identity?.Name ?? "");
            if (user == null)
            {
                return BadRequest(new { Error = "Invalid token" });
            }

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
        public IEnumerable<TextResult> GetTexts([FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 50)
        {
            User? user = _userService.GetUser(User.Identity?.Name ?? "");
            if (user == null)
            {
                return new List<TextResult>();
            }
            if (pageNumber < 1 || pageSize < 1)
            {
                return new List<TextResult>();
            }

            return _textService.GetList(user).Select(ToTextResult)
                .OrderByDescending(text=>text.Created)
                .Skip(pageSize * (pageNumber - 1))
                .Take(pageSize);
        }

        [Authorize]
        [HttpGet("HeaderOnly")]
        public IEnumerable<TextHeader> GetHeaders([FromQuery] int pageNumber=1, [FromQuery] int pageSize=50)
        {
            User? user = _userService.GetUser(User.Identity?.Name ?? "");
            if (user == null){
                return new List<TextResult>();
            }

            if(pageNumber < 1 || pageSize < 1) {
                return new List<TextResult>();
            }

            return _textService.GetList(user)
                .Select(ToTextHeader)
                .OrderByDescending(text => text.Created)
                .Skip(pageSize * (pageNumber - 1))
                .Take(pageSize);
        }

        private TextResult ToTextResult(Text text)
        {
  
            return new TextResult{ 
                Id = text.Id, 
                Title = text.Title, 
                Content = text.Content, 
                PrivateContent = text.PrivateContent,
                LastUpdate = text.LastUpdate, 
                Created=text.Created, 
                LastSimilarity = text.LastSimilarity, 
                Owner=text.Owner.Username
            };
        }
        private TextHeader ToTextHeader(Text text)
        {

            return new TextHeader
            {
                Id = text.Id,
                Title = text.Title,
                PrivateContent = text.PrivateContent,
                Created = text.Created,
            };
        }
    }
}
