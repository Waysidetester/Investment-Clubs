using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using System.Linq;
using System.Threading.Tasks;
using Investment_Clubs.Models.Clubs;
using Investment_Clubs.Models.Partners;

namespace Investment_Clubs.Database.Clubs
{
    public class BaseClubLevel
    {
        readonly string _connectionString;

        public BaseClubLevel(IOptions<DbConfiguration> dbConfig)
        {
            _connectionString = dbConfig.Value.ConnectionString;
        }

        internal IUsersClubs GetClubPageContent(int partnerId, int clubId)
        {

            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string selectQuery = @"
                                    SELECT c.Id ClubId, c.ClubName, c.PartnerCount, c.AccreditedPartnerCount,
                                        c.ClubInvestable, c.SelfDirected, c.DollarsInvested
                                    FROM Partner as p
                                        join PartnerClub as pc on pc.PartnerId = p.Id
                                        join Club as c on pc.ClubId = c.Id
                                    WHERE p.Id = @PartnerId and c.Id = @ClubId";
                var parameters = new { PartnerId = partnerId, ClubId = clubId };

                var club = db.QueryFirstOrDefault<AllClubInfo>(selectQuery, parameters);

                // Ensures there is a return value or throws an exception
                if (club != null)
                {
                    return club;
                }
            }
            throw new Exception("error getting club page info");
        }

        internal IEnumerable<IClubMember> GetClubPartners(int partnerId, int clubId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string selectQuery = @"
                              SELECT pc.PartnerId, p.FirstName, p.LastName, 
                                pc.DateJoined, pc.Contributing, pc.Investable, 
                                pc.IsAdmin
                              FROM PartnerClub pc
                            	join Partner p on p.Id = pc.PartnerId
                              WHERE ClubId=@ClubId and ApprovedMember = 1
	                            and NOT PartnerId=@PartnerId";
                var parameters = new { PartnerId = partnerId, ClubId = clubId };

                var partners = db.Query<ClubMember>(selectQuery, parameters);

                // Ensures there is a return value or throws an exception
                if (partners != null)
                {
                    return partners;
                }
            }
            throw new Exception("error getting club page info");

        }
        //SELECT i.Id InvestmentId,
        //it.InvestmentType, i.OwnershipUnits, i.DollarsInvested, i.DollarsDivested,
        //i.ReceivingEntity, i.DebtCoupon, i.MatureDate, i.ContractPrice, i.PercentEquity,
        //i.InvestDate, i.DivestDate, i.Pending, i.Invested, i.Convertable, pc.PartnerId,
        //pc.ApprovedMember, pc.IsAdmin, pc.DateJoined, pc.ClubExitDate, pc.Contributing,
        //pc.Investable, p.Accredited, p.FirstName, p.LastName
        //FROM Partner as p
        //    join PartnerClub as pc on pc.PartnerId = p.Id
        //    join PartnerClubInvestment as pci on pci.PartnerClubId = pc.Id
        //    join Investment as i on i.Id = pci.InvestmentId
        //    join Club as c on c.Id = pc.ClubId
        //    join InvestmentType as it on it.Id = i.AssetType
        //WHERE p.Id= 1 and i.ClubId= 2 and pc.ApprovedMember= 1
    }
}
