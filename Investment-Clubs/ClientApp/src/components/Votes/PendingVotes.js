import React from 'react';
import { 
  ListGroupItem, 
  Button,
  ButtonGroup,
} from 'reactstrap';
import './PendingVotes.scss';

class PendingVotes extends React.Component{

  VoteButton

  render() {
    return(
      <ListGroupItem>
        <p>Club Name: {this.props.vote.clubName}</p>
        <p>Investment Type: {this.props.vote.investmentType}</p>
        <p>Receiving Entity: {this.props.vote.receivingEntity}</p>
        <ButtonGroup>
          <Button color='danger'>Nay {this.props.vote.vote}</Button>
          <Button color='info' disabled>Recuse{this.props.vote.abstain}</Button>
          <Button color='success'>Aye</Button>
        </ButtonGroup>
      </ListGroupItem>
    );
  }
}

export default PendingVotes;