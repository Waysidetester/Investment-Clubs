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

        // Details per investment
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
            throw new Exception("I cannot get the pending investments for this user");
        }

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
            throw new Exception("I cannot get the pending investments for this user");
        }

        internal ClubROI ClubROI(int clubId)
        {
            using (SqlConnection db = new SqlConnection(_connectionString))
            {
                string querystring = @"	
                    SELECT SUM(Performance.InvPerform)CROI, ClubId
                    FROM (
	                    SELECT (DollarsDivested - DollarsInvested) InvPerform, ClubId
	                    FROM Investment
	                    WHERE ClubId = @ClubId) as Performance
                    GROUP BY ClubId";
                var parameters = new { ClubId = clubId };

                var InvestDetail = db.QueryFirstOrDefault<ClubROI>(querystring, parameters);

                if (InvestDetail != null)
                {
                    return InvestDetail;
                }
            }
            throw new Exception("I cannot get the pending investments for this user");
        }

    }
}

