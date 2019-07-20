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
        public IEnumerable<IUsersClubs> GetClubsForUser(int partnerId)
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

                // Ensures there is a return value
                if (clubs != null)
                {
                    return clubs;
                }
            }
            throw new Exception("User is not involved with any clubs");
        }
    }
}
