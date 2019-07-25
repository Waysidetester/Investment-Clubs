using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
