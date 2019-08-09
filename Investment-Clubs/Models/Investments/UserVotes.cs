namespace Investment_Clubs.Models.Investments
{
    public class UserVotes : IUserVotes
    {
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public bool? Vote { get; set; }
        public bool Abstain { get; set; }
    }
}
