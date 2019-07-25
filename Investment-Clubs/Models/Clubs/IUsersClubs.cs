namespace Investment_Clubs.Models.Clubs
{
    public interface IUsersClubs
    {
        string ClubName { get; set; }
        decimal ClubInvestable { get; set; }
        bool SelfDirected { get; set; }
    }
}