import React from 'react';
import PendingVotes from '../Detail/PendingVotes';
import { ListGroup } from 'reactstrap';
import './PendingVotesContainer.scss';

// loaded in Home page. Contains all pending votes for user
class PendingVotesContainer extends React.Component{
  PendVoteGenerator = () => {
    return this.props.votes.map((vote) => <PendingVotes key={vote.id} vote={vote} UpdateVote={this.props.UpdateVote}/>);
  }

  render() {
    if(this.props.votes <= 0){
      return (
        <ListGroup>
          <p>you have no pending votes</p>
        </ListGroup>
      )
    }

    return(
      <ListGroup>
        {this.PendVoteGenerator()}
      </ListGroup>
    );
  }
}

export default PendingVotesContainer;