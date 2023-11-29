using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models.Text
{
    public class TextBase : TextHeader
    {

        [Required]
        [StringLength(maximumLength: 10000)]
        public string Content { get; set; }

        [Required]
        public DateTime LastUpdate { get; set; }

        public double LastSimilarity { get; set; }

    }
}
