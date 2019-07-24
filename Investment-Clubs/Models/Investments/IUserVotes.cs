namespace Investment_Clubs.Models.Investments
{
    public interface IUserVotes
    {
        int Id { get; set; }
        bool? Vote { get; set; }
        bool Abstain { get; set; }
    }
}