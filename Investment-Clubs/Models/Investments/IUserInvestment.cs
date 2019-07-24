namespace Investment_Clubs.Models.Investments
{
    public interface IUserInvestment : IUserVotes
    {
        string InvestmentType { get; set; }
        string ReceivingEntity { get; set; }
    }
}