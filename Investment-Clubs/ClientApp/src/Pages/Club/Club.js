import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import './Club.scss';

class Club extends React.Component{
  state={
    club: null,
    votes: null,
    userInvs: null,
  }

  componentDidMount(){
    this.DbCalls([
      {funct: ProspGerm.GetVotesForUser, stateName:'votes'},
    ]);
    ProspGerm.DetailsForClub(this.props.currentUser, )
  }

  DbCalls = (asyncCalls) => {
    asyncCalls.forEach(call => {
      call['funct'](this.props.currentUser)
        .then((res) => {
          const name = call['stateName'];
          this.setState({ [name]: res.data })
        })
        .catch((err) => console.error(err));
    });
  }

  UpdateVote = (decision) => {
    ProspGerm.CastUserVote(decision)
      .then(res => {
        this.MutateVotesObject(res.data);
      })
      .catch(err => console.error(err));
  }

  /* 
    copies state and changes the vote based
    on what the database returns
  */
  MutateVotesObject = (asyncResults) => {
    const voteStateCopy = [...this.state.votes];
    const voteIndex = voteStateCopy.findIndex(vote => vote.id === asyncResults.id)

    voteStateCopy[voteIndex].vote = asyncResults.vote;
    voteStateCopy[voteIndex].abstain = asyncResults.abstain; 
    this.setState({votes: voteStateCopy});
  }


  render(){
    return(
      <h1>This is the club page</h1>
    );
  }
}

export default Club;
