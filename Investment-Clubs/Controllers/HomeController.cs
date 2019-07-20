using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            var x = _connections.GetClubsForUser(userId);

            return Accepted(x);
        }
    }
}