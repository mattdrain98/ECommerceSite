using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECommerceSite.Models
{
  public class GameTags
  {
    [Key]
    public int gameTagsId { get; set; }
    [ForeignKey(nameof(gameId))]
    public int gameId { get; set; }
    [ForeignKey(nameof(tagId))]
    public int tagId { get; set; }
  }
}
