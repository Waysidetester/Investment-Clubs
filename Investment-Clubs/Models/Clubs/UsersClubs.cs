using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Clubs
{
    public class UsersClubs
    {
        public string ClubName { get; set; }
        public int PartnerCount { get; set; }
        public int AccreditedPartnerCount { get; set; }
        public decimal ClubInvestable { get; set; }
        public bool SelfDirected { get; set; }
    }
}
