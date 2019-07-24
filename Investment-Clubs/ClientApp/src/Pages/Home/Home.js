import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import ClubsBasicsContainer from '../../components/Club/ClubsBasicsContainer';
import './Home.scss';
import PendingVotesContainer from '../../components/Votes/Container/PendingVotesContainer';

class Home extends React.Component{
  state = {
    clubs: null,
    votes: null,
  }

  componentDidMount(){
    this.DbCalls([
      {funct: ProspGerm.GetClubsForUser, stateName: 'clubs'},
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
        <h1>Home page</h1>
        <ClubsBasicsContainer clubs={this.state.clubs}/>
        <PendingVotesContainer votes={this.state.votes} UpdateVote={this.UpdateVote}/>
      </div>
    );
  }
}

export default Home;
