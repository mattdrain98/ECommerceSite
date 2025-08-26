using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceSite.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GamesController : ControllerBase
  {
    private readonly ApplicationDbContext _context;
    private readonly ILogger<GamesController> _logger;

    public GamesController(ILogger<GamesController> logger, ApplicationDbContext context)
    {
      this._logger = logger;
      this._context = context;
    }

    [HttpGet]
    public IActionResult GetAllGames()
    {
      var allGames = _context.Games.ToList();

      return Ok(allGames);
    }
  }
}
