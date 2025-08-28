using System.ComponentModel.DataAnnotations;

namespace ECommerceSite.Models
{
  public class Tags
  {
    [Key]
    public int tagId { get; set; }
    public string tagName { get; set; }
  }
}
