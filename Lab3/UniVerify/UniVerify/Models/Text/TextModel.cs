using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models.Text
{
    public class TextModel
    {
        [Required]
        [StringLength(maximumLength: 10000, MinimumLength = 200)]
        public string Content { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        /// <summary>
        /// If true - don't allow to verify text by other users
        /// </summary>
        public bool PrivateContent { get; set; }
    }
}
