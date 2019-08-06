import React from 'react';
import VoteButtons from '../VoteButtons/VoteButtons';
import './PendingVotes.scss';

class PendingVotes extends React.Component{

  render() {
    return(
      <div className='single-vote'>
        <p>Club: {this.props.vote.clubName}</p>
        <p>For: {this.props.vote.receivingEntity}</p>
        <p>Investment Type: {this.props.vote.investmentType}</p>
        <VoteButtons vote={this.props.vote} UpdateVote={this.props.UpdateVote}/>
      </div>
    );
  }
}

export default PendingVotes;