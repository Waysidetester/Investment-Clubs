import axios from 'axios';
import config from '../RestConfig';

const baseUrl = config.DbConfig.baseUrl;

const GetClubsForUser = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/home/clubs`, {
    params: {
      userId: authedUserId
    }
  }).then(res => Resolve(res))
  .catch(err => Reject(err))
})

const GetVotesForUser = (authedUserId) => new Promise((Resolve, Reject) => {
  axios.get(`${baseUrl}/api/home/votes`, {
    params: {
      userId: authedUserId
    }
  }).then(res => Resolve(res))
  .catch(err => Reject(err))
})


export default {
  GetClubsForUser,
  GetVotesForUser,
}