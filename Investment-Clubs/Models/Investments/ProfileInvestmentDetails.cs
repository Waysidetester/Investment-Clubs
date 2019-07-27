using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Investments
{
    public class ProfileInvestmentDetails : IInvestment, IPartnerInvestment
    {
        public int PartnerId { get; set; }
        public int ClubId { get; set; }
        public int InvestmentId { get; set; }
        public string InvestmentType { get; set; }
        public string ReceivingEntity { get; set; }
        public decimal PercentContributed { get; set; }
        public decimal PartnerContributed { get; set; }
        public decimal TotalInvestment { get; set; }
    }
}
