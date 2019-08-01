namespace Investment_Clubs.Models.Partners
{
    public interface IClubMember
    {
        int PartnerId { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        decimal Contributing { get; set; }
        bool IsAdmin { get; set; }
    }
}