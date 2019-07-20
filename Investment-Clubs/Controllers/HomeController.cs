using Microsoft.AspNetCore.Mvc;
using Investment_Clubs.Database.Clubs;

namespace Investment_Clubs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        readonly UserLevel _connections;

        public HomeController(UserLevel connections)
        {
            _connections = connections;       
        }

        [HttpGet]
        public IActionResult GetClubsForUser(int userId)
        {
            try
            {
                var usersClubs = _connections.GetClubsForUser(userId);

                return Accepted(usersClubs);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}