using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Investments
{
    public class ProfileInvestmentDetails : IInvestment, IPartnerInvestment
    {
        public string InvestmentType { get; set; }
        public string ReceivingEntity { get; set; }
        public decimal PercentContributed { get; set; }
        public decimal PartnerContributed { get; set; }
        public decimal TotalInvestment { get; set; }
    }
}
