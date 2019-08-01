using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Clubs
{
    public class AllClubInfo : UsersClubs
    {
        public int ClubId { get; set; }
        public decimal DollarsInvested { get; set; }
    }
}
