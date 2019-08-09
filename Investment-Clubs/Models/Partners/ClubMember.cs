using System;

namespace Investment_Clubs.Models.Partners
{
    public class ClubMember : IClubMember
    {
        public int PartnerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateJoined { get; set; }
        public decimal Contributing { get; set; }
        public decimal Investable { get; set; }
        public bool IsAdmin { get; set; }
    }
}
