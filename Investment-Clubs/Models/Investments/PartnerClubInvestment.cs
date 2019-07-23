using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Investments
{
    public class PartnerClubInvestment : IUserVotes
    {
        public int Id { get; set; }
        public int PartnerClubId { get; set; }
        public int InvestmentId { get; set; }
        public bool? Vote { get; set; }
        public bool Abstain { get; set; }
        public decimal PercentContributed { get; set; }
    }
}
