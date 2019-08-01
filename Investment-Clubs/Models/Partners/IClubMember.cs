namespace Investment_Clubs.Models.Partners
{
    public interface IClubMember
    {
        decimal Contributing { get; set; }
        bool IsAdmin { get; set; }
        int PartnerId { get; set; }
    }
}