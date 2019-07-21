import React from 'react';
import './PendingVotes.scss';

class PendingVotes extends React.Component{
  render() {
    return(
      <div>
        <p>Abstain: {this.props.vote.abstain}</p>
        <p>Club Name: {this.props.vote.clubName}</p>
        <p>Investment Type: {this.props.vote.investmentType}</p>
        <p>Receiving Entity: {this.props.vote.receivingEntity}</p>
        <p>Vote: {this.props.vote.vote}</p>
      </div>
    );
  }
}

export default PendingVotes;