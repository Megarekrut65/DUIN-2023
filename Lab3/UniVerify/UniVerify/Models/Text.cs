using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models
{
    public class Text
    {
        public Guid Id { get; set; }

        [Required]
        [StringLength(maximumLength:10000)]
        public string Content { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        public DateTime LastUpdate { get; set; }

        [Required]
        public DateTime Created { get; set; }

        public double LastSimilarity { get; set; }

        [Required]
        public bool PrivateContent { get; set; }

        [Required]
        public User Owner { get; set; }

        public Text() { }

        public Text(string title, string content, bool privateContent, User owner)
        {
            Id = Guid.NewGuid();
            Title = title;
            Content = content;
            PrivateContent = privateContent;
            Owner = owner;

            LastUpdate = DateTime.UtcNow;
            Created = DateTime.UtcNow;
            LastSimilarity = 100;
        }
    }
}
