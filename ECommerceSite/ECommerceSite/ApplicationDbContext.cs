using ECommerceSite;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
      : base(options)
  {
  }

  public DbSet<Games> Games { get; set; }
<<<<<<< HEAD
=======
  public DbSet<Tags> Tags { get; set; }
  public DbSet<GameTags> GameTags { get; set; }
>>>>>>> 6863597 (Game page now works with api)
}
