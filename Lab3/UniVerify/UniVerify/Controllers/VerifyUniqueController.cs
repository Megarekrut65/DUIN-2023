using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UniVerify.Models;
using UniVerify.Services;

namespace UniVerify.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VerifyUniqueController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITextService _textService;
        private readonly IVerifyUniqueService _verifyUniqueService;
        private readonly TextUtility _textUtility;

        public VerifyUniqueController(IUserService userService, ITextService textService, 
            IVerifyUniqueService verifyUniqueService)
        {
            _userService = userService;
            _textService = textService;
            _verifyUniqueService = verifyUniqueService;

            _textUtility = new TextUtility(_textService, _userService);
        }

        [HttpGet("Full/{textId}")]
        public IActionResult VerifyUniqueFull(string textId) {
            Text text;

            try
            {
                text = _textUtility.GetText(textId, User.Identity!.Name!);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            VerifyResult result = _verifyUniqueService.GetUniqueFull(text);
            text.LastSimilarity = result.UniquePercent;

            try
            {
                _textService.UpdateFull(text);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            return Ok(result);
        }

        [HttpGet("Short/{textId}")]
        public IActionResult VerifyUniqueShort(string textId)
        {
            Text text;

            try
            {
                text = _textUtility.GetText(textId, User.Identity!.Name!);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            double result = _verifyUniqueService.GetUniqueShort(text);

            text.LastSimilarity = result;

            try
            {
                _textService.UpdateFull(text);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }

            return Ok(new {UniquePercent=result});
        }
    }
}
