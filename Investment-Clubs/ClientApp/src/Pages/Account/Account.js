import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import ClubDetailsContainer from '../../components/Club/DetailsContainer/ClubDetailsContainer';
import './Account.scss';

class Account extends React.Component{
  state={
    clubDetails: [],
    investmentDetails: [],
    pendingInvestments: [],
    votes:[],
  }


  componentDidMount(){
    this.DbCalls([
      {funct: ProspGerm.GetClubDetailsForUser, stateName: 'clubDetails'},
      {funct: ProspGerm.GetUsersInvestments, stateName: 'investmentDetails'},
      {funct: ProspGerm.GetPendingInvestments, stateName: 'pendingInvestments'},
      {funct: ProspGerm.GetVotesForUser, stateName:'votes'}
    ]);
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


  render() {
    return(
      <div>
        <ClubDetailsContainer 
          clubDetails={this.state.clubDetails}
          investmentDetails={this.state.investmentDetails} 
          pendingInvestments={this.state.pendingInvestments}
          votes={this.state.votes}
          UpdateVote={this.UpdateVote}
        />
      </div>
    );
  }
}

export default Account;
