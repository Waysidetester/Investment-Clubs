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
        readonly QuickVotes _voteConnect;
        readonly InvestmentDetail _investmentDetail;

        public ProfileController(UserLevel clubConnect, QuickVotes voteConnect, InvestmentDetail investConnect)
        {
            _clubConnect = clubConnect;
            _voteConnect = voteConnect;
            _investmentDetail = investConnect;
        }

        [HttpGet("clubs")]
        public IActionResult GetClubDetailsForUser(int partnerId)
        {
            try
            {
                var partnersClubs = _clubConnect.GetClubDetailsForUser(partnerId);

                return Accepted(partnersClubs);
            }
            catch
            {
                return BadRequest("unable to get user's clubs");
            }
        }

        [HttpGet("investments")]
        public IActionResult GetInvestmentDetailsForUser(int partnerId)
        {
            try
            {
                var partnersInvestments = _investmentDetail.GetInvestmentDetailsForUser(partnerId);

                return Accepted(partnersInvestments);
            }
            catch
            {
                return BadRequest("unable to get investment details");
            }
        }

        [HttpGet("investments/pending")]
        public IActionResult GetPendingInvestmentsForUser(int partnerId)
        {
            try
            {
                var pendingInvestmentDetails = _investmentDetail.GetPendingInvestDetails(partnerId);

                return Accepted(pendingInvestmentDetails);
            }
            catch
            {
                return BadRequest("unable to get pending investments");
            }
        }
    }
}