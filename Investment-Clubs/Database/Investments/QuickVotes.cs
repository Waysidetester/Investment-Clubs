using Dapper;
using Investment_Clubs.Models.Investments;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Investment_Clubs.Database.Investments
{
    public class QuickVotes
    {
        readonly string _connectionString;
        public QuickVotes(IOptions<DbConfiguration> dbConfig)
        {
            _connectionString = dbConfig.Value.ConnectionString;
        }

        // returns all pending votes for the current user that is a part of that club
        internal IEnumerable<IUserVotes> GetVotesForUser(int id, SqlConnection db)
        {
            string querystring = @"SELECT pci.id, p.id PartnerId
                                       FROM Partner as p
	                                       join PartnerClub as pc on pc.PartnerId = p.Id
	                                       join PartnerClubInvestment as pci on pci.PartnerClubId = pc.Id
                                       WHERE p.Id=@PartnerId and pc.ApprovedMember=1";
            var parameters = new { PartnerId = id };

            var pendingInvestments = db.Query<UserVotes>(querystring, parameters);

            if (pendingInvestments != null)
            {
                return pendingInvestments;
            }
            throw new Exception("trouble getting votes for user");
        }

        // returns all pending votes for the current user that is a part of that club
        internal IEnumerable<IUserVotes> GetPendingVotesForUser(int partnerId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"
                                    SELECT pci.id, p.id PartnerId, pci.Vote, pci.Abstain, pc.ClubId,
                                        i.ReceivingEntity, c.ClubName, it.InvestmentType, i.Id InvestmentId
                                    FROM Partner as p
	                                    join PartnerClub as pc on pc.PartnerId = p.Id
	                                    join PartnerClubInvestment as pci on pci.PartnerClubId = pc.Id
	                                    join Investment as i on i.Id = pci.InvestmentId
	                                    join Club as c on c.Id = pc.ClubId
	                                    join InvestmentType as it on it.Id = i.AssetType
                                    WHERE p.Id=@PartnerId and i.Pending=1 and pc.ApprovedMember=1";
                var parameters = new { PartnerId = partnerId };

                var pendingInvestments = db.Query<PendingVotes>(querystring, parameters);

                if (pendingInvestments != null)
                {
                    return pendingInvestments;
                }
            }
            throw new Exception("trouble getting votes for user");
        }

        internal IUserVotes CastUserVote(UserVotes submittedVote)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                var UserVotes = GetVotesForUser(submittedVote.PartnerId, db).ToList();

                if (UserVotes.FirstOrDefault(Vote => Vote.Id.Equals(submittedVote.Id)) != null)
                {
                    string querystring = @"	UPDATE PartnerClubInvestment
	                                        SET Abstain = @Abstain
	                                        if (SELECT Abstain FROM PartnerClubInvestment WHERE Id=@VoteId) = 1
		                                        BEGIN
			                                        UPDATE PartnerClubInvestment
			                                        SET Vote = NULL
			                                        OUTPUT inserted.*
			                                        WHERE Id=@VoteId
		                                        END
	                                        else
		                                        BEGIN
			                                        UPDATE PartnerClubInvestment
			                                        SET Vote = @Vote
			                                        OUTPUT inserted.*
			                                        WHERE Id=@VoteId
		                                        END";
                    var parameters = new { VoteId = submittedVote.Id, Vote = submittedVote.Vote, Abstain = submittedVote.Abstain };

                    var pendingInvestments = db.QueryFirstOrDefault<PartnerClubInvestment>(querystring, parameters);

                    if (pendingInvestments != null)
                    {
                        return pendingInvestments;
                    }
                }
            }
            throw new Exception("trouble getting votes for user");
        }
    }
}
