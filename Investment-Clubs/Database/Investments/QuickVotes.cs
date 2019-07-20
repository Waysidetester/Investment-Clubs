using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;
using Investment_Clubs.Models.Investments;
using Dapper;

namespace Investment_Clubs.Database.Investments
{
    public class QuickVotes
    {
        readonly string _connectionString;
        public QuickVotes(IOptions<DbConfiguration> dbConfig)
        {
            _connectionString = dbConfig.Value.ConnectionString;
        }

        public IEnumerable<IInvestment> GetVotesForUser(int id)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"SELECT pci.Vote, pci.Abstain, i.ReceivingEntity, c.ClubName, it.InvestmentType
                                       FROM Partner as p
	                                       join PartnerClub as pc on pc.PartnerId = p.Id
	                                       join PartnerClubInvestment as pci on pci.PartnerClubId = pc.Id
	                                       join Investment as i on i.Id = pci.InvestmentId
	                                       join Club as c on c.Id = pc.ClubId
	                                       join InvestmentType as it on it.Id = i.AssetType
                                       WHERE p.Id=@UserId and i.Pending=1 and pc.ApprovedMember=1";
                var parameters = new { UserId = id };

                var pendingInvestments = db.Query<PendingVotes>(querystring, parameters);

                if(pendingInvestments != null)
                {
                    return pendingInvestments;
                }
            }
            throw new Exception("trouble getting votes for user");
        }
    }
}
