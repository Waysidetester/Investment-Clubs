namespace Investment_Clubs.Models.Clubs
{
    public class UsersClubs : IUsersClubs
    {
        public string ClubName { get; set; }
        public int PartnerCount { get; set; }
        public int AccreditedPartnerCount { get; set; }
        public decimal ClubInvestable { get; set; }
        public bool SelfDirected { get; set; }
    }
}
