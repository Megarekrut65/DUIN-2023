using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using UniVerify.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
        base(options)
    { }

    public DbSet<User>? Users { get; set; }


}