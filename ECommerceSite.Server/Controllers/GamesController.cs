using ECommerceSite.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Any;

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

        [HttpGet("search/{searchTerm}")]
        public async Task<IActionResult> GetGamesBySearch(string searchTerm)
        {
            var gamesByTag = await _context.Games.Where(g => g.gameName.ToLower().Contains(searchTerm.ToLower())).ToListAsync();

            return Ok(gamesByTag);
        }

        [HttpGet("tags/{tag}")]
        public async Task<IActionResult> GetGamesByTag(string tag)
        {
            var gamesByTag = await (
                from g in _context.Games
                join gt in _context.GameTags on g.gameId equals gt.gameId
                join t in _context.Tags on gt.tagId equals t.tagId
                where t.tagName.ToLower() == tag.ToLower()
                select g
            ).ToListAsync();

            return Ok(gamesByTag);
        }
    }
}
