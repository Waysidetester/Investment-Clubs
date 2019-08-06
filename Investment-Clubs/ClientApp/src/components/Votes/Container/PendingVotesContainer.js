import React from 'react';
import PendingVotes from '../Detail/PendingVotes';
import './PendingVotesContainer.scss';

// loaded in Home page. Contains all pending votes for user
class PendingVotesContainer extends React.Component{
  PendVoteGenerator = () => {
    return this.props.votes.map((vote) => <PendingVotes key={vote.id} vote={vote} UpdateVote={this.props.UpdateVote}/>);
  }

  render() {
    if(this.props.votes <= 0){
      return (
        <ul className='vote-container'>
          <p>you have no pending votes</p>
        </ul>
      )
    }

    return(
      <div className='vote-container'>
        <h3 className='vote-container-title'>Pending Investments</h3>
        <div className='vote-generator'>
          {this.PendVoteGenerator()}
        </div>
      </div>
    );
  }
}

export default PendingVotesContainer;