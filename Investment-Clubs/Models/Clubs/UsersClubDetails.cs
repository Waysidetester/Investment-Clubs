using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Clubs
{
    public class UsersClubDetails : IUsersClubs
    {
        public string ClubName { get; set; }
        public bool SelfDirected { get; set; }
        public decimal ClubInvestable { get; set; }
        public decimal PartnerInvestable { get; set; }
    }
}
