using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using UniVerify.Models;
using UniVerify.Models.Text;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
        base(options)
    { }

    public DbSet<User>? Users { get; set; }
    public DbSet<Text>? Texts { get; set; }

}