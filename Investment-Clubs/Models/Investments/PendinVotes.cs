using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Investments
{
    public class PendingVotes : IUserInvestment
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool? Vote { get; set; }
        public bool Abstain { get; set; }
        public string ReceivingEntity { get; set; }
        public string ClubName { get; set; }
        public string InvestmentType { get; set; }
    }
}
