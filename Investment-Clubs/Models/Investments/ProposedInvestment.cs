using System;

namespace Investment_Clubs.Models.Investments
{
    public class ProposedInvestment
    {
        public string ReceivingEntity { get; set; }
        public int AssetType { get; set; }
        public int ClubId { get; set; }
        public int OwnershipUnits { get; set; }
        public decimal DollarsInvested { get; set; }
        public decimal? DebtCoupon { get; set; }
        public DateTime? MatureDate { get; set; }
        public decimal? ContractPrice { get; set; }
        public decimal? PercentEquity { get; set; }
        public DateTime ProposalExpireDate { get; set; }
        public DateTime? NextCouponPayment { get; set; }
        public byte? Interval { get; set; }
        public decimal? FaceValue { get; set; }
        public bool Convertable { get; set; }
    }
}
