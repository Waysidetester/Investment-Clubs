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

export default {
  GetClubsForUser,
  GetClubDetailsForUser,
  GetVotesForUser,
  CastUserVote,
}