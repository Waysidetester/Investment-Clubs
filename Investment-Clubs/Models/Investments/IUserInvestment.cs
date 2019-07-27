namespace Investment_Clubs.Models.Investments
{
    public interface IUserInvestment 
    {
        string InvestmentType { get; set; }
        string ReceivingEntity { get; set; }
    }
}