using System;

namespace Investment_Clubs.Models.Investments
{
    public class ClubInvestments : IUserInvestment
    {
        public int Id { get; set; }
        public int ClubId { get; set; }
        public string InvestmentType { get; set; }
        public int OwnershipUnits { get; set; }
        public decimal? DollarsInvested { get; set; }
        public decimal? DollarsDivested { get; set; }
        public string ReceivingEntity { get; set; }
        public decimal? DebtCoupon { get; set; }
        public DateTime? MatureDate { get; set; }
        public decimal? ContractPrice { get; set; }
        public decimal? PercentEquity { get; set; }
        public DateTime? InvestDate { get; set; }
        public DateTime? DivestDate { get; set; }
        public bool Pending { get; set; }
        public bool Invested { get; set; }
        public bool Convertable { get; set; }
        public DateTime ProposalExpireDate { get; set; }
        public DateTime? NextCouponPayment { get; set; }
        public byte? Interval { get; set; }
        public decimal? FaceValue { get; set; }
    }
}
