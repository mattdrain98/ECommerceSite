using ECommerceSite;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
      : base(options)
  {
  }

  public DbSet<Games> Games { get; set; }
}
