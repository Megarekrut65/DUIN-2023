using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models
{
    public class Text
    {
        public Guid Id { get; set; }

        [Required]
        [StringLength(maximumLength:10000, MinimumLength = 200)]
        public string Content;

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        public DateTime LastUpdate { get; set; }

        [Required]
        public DateTime Created { get; set; }

        public float LastSimilarity { get; set; }

        [Required]
        public User Owner { get; set; }

        public Text() { }

        public Text(string title, string content, User owner)
        {
            Id = Guid.NewGuid();
            Title = title;
            Content = content;
            Owner = owner;

            LastUpdate = DateTime.UtcNow;
            Created = DateTime.UtcNow;
            LastSimilarity = 100;
        }
    }
}
