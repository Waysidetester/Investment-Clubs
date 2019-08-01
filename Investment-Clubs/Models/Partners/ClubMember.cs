using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Partners
{
    public class ClubMember : IClubMember
    {
        public int PartnerId { get; set; }
        public DateTime DateJoined { get; set; }
        public decimal Contributing { get; set; }
        public decimal Investable { get; set; }
        public bool IsAdmin { get; set; }
    }
}
