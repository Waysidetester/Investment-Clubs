import React from 'react';
import { 
  ListGroupItem, 
} from 'reactstrap';
import VoteButtons from '../VoteButtons/VoteButtons';
import './PendingVotes.scss';

class PendingVotes extends React.Component{

  render() {
    return(
      <ListGroupItem>
        <p>Club Name: {this.props.vote.clubName}</p>
        <p>Issuing Entity: {this.props.vote.receivingEntity}</p>
        <p>Investment Type: {this.props.vote.investmentType}</p>
        <VoteButtons vote={this.props.vote} UpdateVote={this.props.UpdateVote}/>
      </ListGroupItem>
    );
  }
}

export default PendingVotes;