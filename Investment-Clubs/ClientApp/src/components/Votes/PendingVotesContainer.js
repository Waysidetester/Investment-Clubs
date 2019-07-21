import React from 'react';
import PendingVotes from './PendingVotes';
import './PendingVotesContainer.scss';

class PendingVotesContainer extends React.Component{
  PendVoteGenerator = () => {
    return this.props.votes.map(club => <PendingVotes vote={club} />);
  }

  render() {
    if(this.props.votes <= 0){
      return (
        <div>
          <p>you have no pending votes</p>
        </div>
      )
    }

    return(
      <div>
        {this.PendVoteGenerator()}
      </div>
    );
  }
}

export default PendingVotesContainer;