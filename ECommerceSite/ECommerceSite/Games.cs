using System.ComponentModel.DataAnnotations;

namespace ECommerceSite
{
  public class Games
  {
    [Key]
    public int gameId { get; set;  }
    public string gameName { get; set; }
    public double gamePrice { get; set; }
    public string gameImageUrl { get; set; }
    public string? gameDescription { get; set; }
    public DateTime gameReleaseDate { get; set; }
  }
}
