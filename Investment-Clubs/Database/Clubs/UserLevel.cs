using Microsoft.Extensions.Options;
using Dapper;
using Investment_Clubs.Models.Clubs;
using System.Data.SqlClient;
using System;

namespace Investment_Clubs.Database.Clubs
{
    public class UserLevel
    {
        readonly string _connectionString;
        public UserLevel(IOptions<DbConfiguration> dbConfig)
        {
            _connectionString = dbConfig.Value.ConnectionString;
        }

        public UsersClubs GetClubsForUser()
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                var x = GetSingle(@"SELECT c.ClubName, c.PartnerCount, c.AccreditedPartnerCount, c.ClubInvestable, c.SelfDirected
FROM Partner as p
  join PartnerClub as pc on pc.PartnerId = p.Id
  join Club as c on pc.ClubId = c.Id
WHERE p.Id = @UserId", new { UserId = 1 }, connection);
            }
            throw new Exception("User is not involved with any clubs");
        }

        //querystring
        //parameters
        //returnvalue

        public dynamic GetSingle(string querystring, object parameters, SqlConnection connection)
        {
            var product = connection.QueryFirstOrDefault(querystring, parameters);
            if (product != null)
            {
                return product;
            }
            return 0;
        }
        
    }
}
