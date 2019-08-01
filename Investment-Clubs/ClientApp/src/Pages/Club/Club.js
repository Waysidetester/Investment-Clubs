import React from 'react';
import { Jumbotron } from 'reactstrap';
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
    ProspGerm.DetailsForClub(this.props.location.search)
      .then(res => {
        this.setState({club: res.data});
      })
      .catch(err => console.error(err));
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
    if(this.state.club !== null){
      return(
        <div>
          <Jumbotron>
            <h1 className="display-3">{this.state.club.clubName}</h1>
            <h3>Investable --- {this.state.club.clubInvestable.toLocaleString('en-US', {style: 'currency', currency:'USD'})}</h3>
            <h3>Invested --- {this.state.club.dollarsInvested.toLocaleString('en-US', {style: 'currency', currency:'USD'})}</h3>
            <hr className="my-2" />
            <p>Club members: {this.state.club.partnerCount}</p>
            <p>Accredited members: {this.state.club.accreditedPartnerCount}</p>
            <p>{this.state.club.selfDirected}</p>
            <p>Club Type: {this.state.club.selfDirected ? 'Self-Directed' : 'Club-Directed'}</p>
          </Jumbotron>
        </div>
      );
    }
        return(
          <h1>This is the club page</h1>
        );

  }
}

export default Club;
