using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models.Text
{
    public class TextHeader
    {
        public Guid Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public bool PrivateContent { get; set; }
    }
}
