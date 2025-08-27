using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public async Task<IActionResult> GetAllGames()
    {
      var allGames = await _context.Games.ToListAsync();
      return Ok(allGames);
    }

    [HttpGet("{gameId}")]
    public async Task<IActionResult> GetGameById(int gameId)
    {
      var gameById = await _context.Games.FirstOrDefaultAsync(g => g.gameId == gameId); //grab game based on id

      return Ok(gameById); 
    }
  }
}
