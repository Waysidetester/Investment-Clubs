import axios from 'axios';
import config from '../RestConfig';

const baseUrl = config.DbConfig.baseUrl;

const GetClubsForUser = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/home/clubs`, {
    params: {
      partnerId: authedUserId
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const GetClubDetailsForUser = (authedUserId) => new Promise((Resolve,Reject) => {
  axios.get(`${baseUrl}/api/profile/clubs`, {
    params: {
      partnerId: authedUserId
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const GetVotesForUser = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/home/votes`, {
    params: {
      partnerId: authedUserId
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const CastUserVote = (decision) => new Promise((Resolve, Reject) => {
  axios.put(`${baseUrl}/api/home/votes`, decision)
    .then(res => Resolve(res))
    .catch(err => Reject(err))
});

const GetUsersInvestments = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/profile/investments`, {
    params: {
      partnerId: authedUserId
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const GetPendingInvestments = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/profile/investments/pending`, {
    params: {
      partnerId: authedUserId
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const GetInvestmentDetails = (authedUserId, investmentId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/profile/investments/detail`, {
    params: {
      partnerId: authedUserId,
      investmentId: investmentId
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const DetailsForClub = (query) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/club${query}`)
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const ClubPartners = (query) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/club/partners${query}`)
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const ClubInvestments = (query) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/club/investments${query}`)
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});


const ClubIds = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/home`, {
    params: {
      partnerId: authedUserId,
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});

const ClubROI = (ClubId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/club/croi`, {
    params: {
      clubId: ClubId,
    }
  })
  .then(res => Resolve(res))
  .catch(err => Reject(err))
});


export default {
  GetClubsForUser,
  GetClubDetailsForUser,
  GetVotesForUser,
  CastUserVote,
  GetUsersInvestments,
  GetPendingInvestments,
  GetInvestmentDetails,
  DetailsForClub,
  ClubIds,
  ClubPartners,
  ClubInvestments,
  ClubROI,
}