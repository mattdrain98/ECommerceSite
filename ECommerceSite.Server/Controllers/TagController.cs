using ECommerceSite.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ECommerceSite.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<TagController> _logger;

        public TagController(ILogger<TagController> logger, ApplicationDbContext context)
        {
            this._logger = logger;
            this._context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTags()
        {
            var tagCounts = await _context.Tags
                .GroupJoin(
                    _context.GameTags,
                    tag => tag.tagId,
                    gameTag => gameTag.tagId,
                    (tag, gameTags) => new
                    {
                        name = tag.tagName,
                        count = gameTags.Select(g => g.gameId).Distinct().Count()
                    }
                )
                .ToListAsync();

            // Optional: add the "All" tag at the top
            var allCount = tagCounts.Count(); 
            tagCounts.Insert(0, new { name = "All", count = allCount });

            return Ok(tagCounts);
        }
    }
}
