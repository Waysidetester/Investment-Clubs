namespace Investment_Clubs.Models.Investments
{
    public interface IPartnerInvestment
    {
        decimal PercentContributed { get; set; }
        decimal PartnerContributed { get; set; }
        decimal TotalInvestment { get; set; }
    }
}
