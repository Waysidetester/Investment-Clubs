using Investment_Clubs.Models.Investments;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Dapper;

namespace Investment_Clubs.Database.Investments
{

    public class InvestmentDetail
    {
        readonly string _connectionString;
        public InvestmentDetail(IOptions<DbConfiguration> dbConfig)
        {
            _connectionString = dbConfig.Value.ConnectionString;
        }

        // User details on investment
        internal IEnumerable<IPartnerInvestment> GetInvestmentDetailsForUser(int partnerId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"	
                        SELECT p.id PartnerId, pci.PercentContributed, i.Id InvestmentId,
	                        i.DollarsInvested TotalInvestment, i.ClubId, i.ReceivingEntity, it.InvestmentType
                        FROM Partner p
	                        join PartnerClub pc on p.Id = pc.PartnerId
	                        join PartnerClubInvestment pci on pci.PartnerClubId = pc.id
	                        join Investment i on i.Id = pci.InvestmentId
	                        join InvestmentType it on it.Id = i.AssetType
                        WHERE p.Id = @PartnerId and pc.ApprovedMember = 1 and i.Pending = 0 and pci.PercentContributed >  0";
                var parameters = new { PartnerId = partnerId };

                var partnerInvestments = db.Query<ProfileInvestmentDetails>(querystring, parameters);

                if (partnerInvestments != null)
                {
                    partnerInvestments.ToList().ForEach(invest =>
                        invest.PartnerContributed = (invest.PercentContributed * invest.TotalInvestment)
                    );

                    return partnerInvestments;
                }
            }
            throw new Exception("I cannot get the investments this user's made");
        }

        //Details when pending
        internal IEnumerable<DetailedInvestments> GetPendingInvestDetails(int partnerId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"	
                    SELECT i.Id InvestmentId, it.InvestmentType, i.ClubId, i.OwnershipUnits,
	                     i.DollarsInvested, i.ReceivingEntity, i.DebtCoupon, i.MatureDate,
	                     i.ContractPrice, i.PercentEquity, i.InvestDate, i.DivestDate, i.Convertable 
                    FROM Partner p
	                    join PartnerClub pc on p.Id = pc.PartnerId
	                    join PartnerClubInvestment pci on pci.PartnerClubId = pc.id
	                    join Investment i on i.Id = pci.InvestmentId
	                    join InvestmentType it on it.Id = i.AssetType
                    WHERE p.Id = @PartnerId and pc.ApprovedMember = 1 and i.Pending = 1";
                var parameters = new { PartnerId = partnerId };

                var pendingInvestments = db.Query<DetailedInvestments>(querystring, parameters);

                if (pendingInvestments != null)
                {
                    pendingInvestments.ToList();
                    return pendingInvestments;
                }
            }
            throw new Exception("I cannot get the pending investments for this user");
        }

        // Details of an investment per investment
        internal IUserInvestment GetFullInvestDetails(int partnerId, int investmentId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"	
                    SELECT i.Id InvestmentId, it.InvestmentType, i.ClubId, i.OwnershipUnits,
	                     i.DollarsInvested, i.ReceivingEntity, i.DebtCoupon, i.MatureDate,
	                     i.ContractPrice, i.PercentEquity, i.InvestDate, i.DivestDate, i.Convertable 
                    FROM Partner p
	                    join PartnerClub pc on p.Id = pc.PartnerId
	                    join PartnerClubInvestment pci on pci.PartnerClubId = pc.id
	                    join Investment i on i.Id = pci.InvestmentId
	                    join InvestmentType it on it.Id = i.AssetType
                    WHERE p.Id = @PartnerId and pc.ApprovedMember = 1 and i.Id = @InvestmentId";
                var parameters = new { PartnerId = partnerId, InvestmentId = investmentId };

                var InvestDetail = db.QueryFirstOrDefault<DetailedInvestments>(querystring, parameters);

                if (InvestDetail != null)
                {
                    return InvestDetail;
                }
            }
            throw new Exception("I cannot get the investment detail for this Investment");
        }

        // Gets all investments for a club
        internal IEnumerable<IUserInvestment> GetClubInvestDetails(int clubId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"	
                    SELECT i.Id InvestmentId, it.InvestmentType, i.ClubId, i.OwnershipUnits,
	                     i.DollarsInvested, i.ReceivingEntity, i.DebtCoupon, i.MatureDate,
	                     i.ContractPrice, i.PercentEquity, i.InvestDate, i.DivestDate, 
						 i.Convertable, i.Pending, i.Invested
                    FROM Club c
	                    join Investment i on i.ClubId = c.Id
	                    join InvestmentType it on it.Id = i.AssetType
                    WHERE c.Id = @ClubId";
                var parameters = new { ClubId = clubId };

                var InvestDetail = db.Query<ClubInvestments>(querystring, parameters);

                if (InvestDetail != null)
                {
                    return InvestDetail;
                }
            }
            throw new Exception("I cannot get the investments for this Club");
        }

        // gets ROI for the entire club
        internal decimal ClubROI(int clubId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"	
                    SELECT SUM(Performance.InvPerform)CROI
                    FROM (
	                    SELECT (DollarsDivested - DollarsInvested) InvPerform, ClubId
	                    FROM Investment
	                    WHERE ClubId = @ClubId) as Performance
                    GROUP BY ClubId";
                var parameters = new { ClubId = clubId };

                var InvestDetail = db.QueryFirstOrDefault<decimal?>(querystring, parameters);

                if (InvestDetail != null)
                {
                    return (decimal)InvestDetail;
                }
            }
            throw new Exception("I cannot get the club's ROI");
        }

        // gets the ROI for specific user as a part of club
        internal decimal PartnersClubROI(int partnerId, int clubId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                int partnerClubId = PartnerClubId(partnerId, clubId, db);

                string querystring = @"	
                    SELECT SUM(Performance.InvPerform)PROI
                    FROM (
	                    SELECT ((DollarsDivested - DollarsInvested) * pci.PercentContributed) InvPerform, pc.Id partClubInv
	                    FROM Investment i
		                    join PartnerClubInvestment pci on pci.InvestmentId = i.Id
		                    join PartnerClub pc on pc.Id = pci.PartnerClubId
	                    WHERE i.ClubId = @ClubId and pc.Id = @PartClubId) as Performance
                    GROUP BY partClubInv";
                var parameters = new { ClubId = clubId, PartClubId = partnerClubId };

                var InvestDetail = db.QueryFirstOrDefault<decimal?>(querystring, parameters);

                if (InvestDetail != null)
                {
                    return (decimal)InvestDetail;
                }
                else
                {
                    return 0;
                }
            }
            throw new Exception("I cannot get the partner's ROI for this club");
        }

        // Gets partner's Id for membership of club
        internal int PartnerClubId(int partnerId, int clubId, SqlConnection connection)
        {
            string querystring = @"	
                SELECT pc.Id
                FROM PartnerClub pc 
	                join Partner p on p.Id = pc.PartnerId
                WHERE p.Id = @PartnerId and pc.ClubId = @ClubId and pc.ApprovedMember=1";
            var parameters = new { PartnerId = partnerId, ClubId = clubId };

            var partnerClubId = connection.QueryFirstOrDefault<int?>(querystring, parameters);

            if (partnerClubId != null)
            {
                return (int)partnerClubId;
            }
            throw new Exception("I cannot get the partner's PartnerClubId");
        }
    }
}

