using System.ComponentModel.DataAnnotations;

namespace UniVerify.Models.Text
{
    public class Text : TextBase
    {

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
