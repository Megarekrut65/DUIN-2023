using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models
{
    public class TextModel
    {
        [Required]
        [StringLength(maximumLength: 10000, MinimumLength = 200)]
        public string Content { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }
    }
}
