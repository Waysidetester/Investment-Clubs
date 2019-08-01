using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Investment_Clubs.Database.Clubs;


namespace Investment_Clubs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClubController : ControllerBase
    {
        readonly BaseClubLevel _clubBaseConnect;
        public ClubController(BaseClubLevel clubBaseConnect)
        {
            _clubBaseConnect = clubBaseConnect;
        }

        [HttpGet]
        public IActionResult ClubPageContent(int partnerId, int clubId)
        {
            try
            {
                var ClubInfo = _clubBaseConnect.GetClubPageContent(partnerId, clubId);

                return Accepted(ClubInfo);
            }
            catch
            {
                return BadRequest("unable to get club page info");
            }
        }

        [HttpGet("partners")]
        public IActionResult ClubMembers(int partnerId, int clubId)
        {
            try
            {
                var ClubInfo = _clubBaseConnect.GetClubPartners(partnerId, clubId);

                return Accepted(ClubInfo);
            }
            catch
            {
                return BadRequest("unable to get club partners");
            }
        }
    }
}