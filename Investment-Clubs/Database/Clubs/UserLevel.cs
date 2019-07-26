using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Investment_Clubs.Models.Clubs;
using Dapper;

namespace Investment_Clubs.Database.Clubs
{
    public class UserLevel
    {
        readonly string _connectionString;
        public UserLevel(IOptions<DbConfiguration> dbConfig)
        {
            _connectionString = dbConfig.Value.ConnectionString;
        }

        // Returns a list of clubs that the user is a partner to
        internal IEnumerable<IUsersClubs> GetClubsForUser(int partnerId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string selectQuery = @"SELECT c.ClubName, c.PartnerCount, c.AccreditedPartnerCount, c.ClubInvestable, c.SelfDirected
                                       FROM Partner as p
                                           join PartnerClub as pc on pc.PartnerId = p.Id
                                           join Club as c on pc.ClubId = c.Id
                                       WHERE p.Id = @PartnerId";
                var parameters = new { PartnerId = partnerId };

                var clubs = db.Query<UsersClubs>(selectQuery, parameters);

                // Ensures there is a return value or throws an exception
                if (clubs != null)
                {
                    return clubs;
                }
            }
            throw new Exception("User is not involved with any clubs");
        }

        /*
           SELECT p.id PartnerId, pc.id PartnerClubId, pc.IsAdmin, pc.Investable PartnerInvestable,
	            pci.PercentContributed, i.DollarsInvested MoneyInvestedIn, c.Id ClubId,
	            c.ClubName, c.PartnerCount, c.AccreditedPartnerCount, c.DollarsInvested,
	            c.ClubInvestable, c.SelfDirected
            FROM Partner p
	            join PartnerClub pc on p.Id = pc.PartnerId
	            join Club c on c.Id = pc.ClubId
	            join PartnerClubInvestment pci on pci.PartnerClubId = pc.id
	            join Investment i on i.ClubId = c.Id
            WHERE p.Id = 1 and pc.ApprovedMember = 1 and i.Pending = 0
        */
        internal IEnumerable<IUsersClubs> GetClubDetailsForUser(int partnerId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string selectQuery = @"
                    SELECT p.id PartnerId, pc.id PartnerClubId, pc.IsAdmin, pc.Investable PartnerInvestable,
	                    c.Id ClubId, c.ClubName, c.PartnerCount, c.AccreditedPartnerCount, c.DollarsInvested,
	                    c.ClubInvestable, c.SelfDirected
                    FROM Partner p
	                    join PartnerClub pc on p.Id = pc.PartnerId
	                    join Club c on c.Id = pc.ClubId
                    WHERE p.Id = 1 and pc.ApprovedMember = 1";
                var parameters = new { PartnerId = partnerId };

                var clubs = db.Query<UsersClubDetails>(selectQuery, parameters);

                // Ensures there is a return value or throws an exception
                if (clubs != null)
                {
                    return clubs;
                }
            }
            throw new Exception("User is not involved with any clubs");
        }
    }
}
