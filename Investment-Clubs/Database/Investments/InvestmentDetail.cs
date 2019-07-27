﻿using Investment_Clubs.Models.Investments;
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
        internal IEnumerable<ProfileInvestmentDetails> GetInvestmentDetailsForUser(int partnerId)
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
        internal IEnumerable<PendingInvestments> GetPendingInvestDetails(int partnerId)
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

                var pendingInvestments = db.Query<PendingInvestments>(querystring, parameters);

                if (pendingInvestments != null)
                {
                    pendingInvestments.ToList();
                    return pendingInvestments;
                }
            }
            throw new Exception("I cannot get the pending investments for this user");
        }
    }
}

