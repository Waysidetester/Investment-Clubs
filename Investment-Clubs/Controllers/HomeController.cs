using Microsoft.AspNetCore.Mvc;
using Investment_Clubs.Database.Clubs;
using Investment_Clubs.Database.Investments;
using Investment_Clubs.Models.Investments;

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
        public IActionResult GetClubsForUser(int partnerId)
        {
            try
            {
                var usersClubs = _clubConnect.GetClubsForUser(partnerId);

                return Accepted(usersClubs);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("Votes")]
        public IActionResult GetPendingVotesForUser(int partnerId)
        {
            try
            {
                var usersVotes = _investConnect.GetPendingVotesForUser(partnerId);

                return Accepted(usersVotes);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("Votes")]
        public IActionResult CastVoteDecision(UserVotes decision)
        {
            try
            {
                var updatedVote = _investConnect.CastUserVote(decision);

                return Accepted(updatedVote);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult ClubIds(int partnerId)
        {
            try
            {
                var clubIds = _clubConnect.UsersClubIds(partnerId);

                return Accepted(clubIds);
            }
            catch
            {
                return BadRequest("Trouble getting Club Id's for user");
            }
        }
    }
}