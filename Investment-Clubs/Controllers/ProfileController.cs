using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Investment_Clubs.Database.Clubs;
using Investment_Clubs.Database.Investments;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Investment_Clubs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        readonly UserLevel _clubConnect;
        readonly QuickVotes _investConnect;

        public ProfileController(UserLevel clubConnect, QuickVotes investConnect)
        {
            _clubConnect = clubConnect;
            _investConnect = investConnect;
        }

        [HttpGet("clubs")]
        public IActionResult GetClubDetailsForUser(int partnerId)
        {
            try
            {
                var x = _clubConnect.GetClubDetailsForUser(partnerId);

                return Accepted(x);
            }
            catch
            {
                return BadRequest("unable to get user's clubs");
            }
        }
    }
}