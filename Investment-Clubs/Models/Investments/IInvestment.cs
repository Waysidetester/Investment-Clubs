namespace Investment_Clubs.Models.Investments
{
    public interface IInvestment
    {
        string InvestmentType { get; set; }
        string ReceivingEntity { get; set; }
    }
}