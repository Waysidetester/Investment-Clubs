using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Investments
{
    public interface IPartnerInvestment
    {
        decimal PercentContributed { get; set; }
        decimal PartnerContributed { get; set; }
        decimal TotalInvestment { get; set; }
    }
}
