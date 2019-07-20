using Microsoft.AspNetCore.Mvc;
using Investment_Clubs.Database.Clubs;
using Investment_Clubs.Database.Investments;

namespace Investment_Clubs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        readonly UserLevel _clubConnect;
        readonly QuickVotes _investConnect;

        public HomeController(UserLevel clubConnect, QuickVotes investConnect)
        {
            _clubConnect = clubConnect;
            _investConnect = investConnect;
        }

        [HttpGet("Clubs")]
        public IActionResult GetClubsForUser(int userId)
        {
            try
            {
                var usersClubs = _clubConnect.GetClubsForUser(userId);

                return Accepted(usersClubs);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("Votes")]
        public IActionResult GetPendingVotesForUser(int userId)
        {
            try
            {
                var usersVotes = _investConnect.GetVotesForUser(userId);

                return Accepted(usersVotes);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}