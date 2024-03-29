﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Investment_Clubs.Models.Clubs
{
    public class UsersClubDetails : UsersClubs
    {
        public int PartnerId { get; set; }
        public int PartnerClubId { get; set; }
        public int ClubId { get; set; }
        public decimal PartnerInvestable { get; set; }
        public bool isAdmin { get; set; }
        public decimal DollarsInvested { get; set; }
    }
}
