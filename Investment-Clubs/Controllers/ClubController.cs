using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Investment_Clubs.Database.Clubs;
using Investment_Clubs.Database.Investments;


namespace Investment_Clubs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClubController : ControllerBase
    {
        readonly BaseClubLevel _clubBaseConnect;
        readonly InvestmentDetail _invDetailConnect;
        public ClubController(BaseClubLevel clubBaseConnect, InvestmentDetail invDetailConnect)
        {
            _clubBaseConnect = clubBaseConnect;
            _invDetailConnect = invDetailConnect;
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


        [HttpGet("investments")]
        public IActionResult ClubInvestments(int partnerId, int clubId)
        {
            try
            {
                var ClubInfo = _invDetailConnect.GetClubInvestDetails(clubId);

                return Accepted(ClubInfo);
            }
            catch
            {
                return BadRequest("unable to get club investments");
            }
        }

        [HttpGet("CROI")]
        public IActionResult ClubReturnOnInv(int clubId)
        {
            try
            {
                var ClubInfo = _invDetailConnect.ClubROI(clubId);

                return Accepted(ClubInfo);
            }
            catch
            {
                return BadRequest("unable to get club ROI");
            }
        }

        [HttpGet("PROI")]
        public IActionResult PartnerClubReturnOnInv(int partnerId,int clubId)
        {
            try
            {
                var ClubInfo = _invDetailConnect.PartnersClubROI(partnerId, clubId);

                return Accepted(ClubInfo);
            }
            catch
            {
                return BadRequest("unable to get partner's club ROI");
            }
        }

    }
}