import React from 'react';
import {
  ButtonGroup,
  Button,
} from 'reactstrap';
import './VoteButtons.scss';

class VoteButtons extends React.Component{
  // sets all buttons as disabled on load
  state = {
    Nay: true,
    Recuse: true,
    Aye: true,
  }

  /* 
    Determines which button to disable based on
    whether or not they are voting. Club members must not
    be passive to avoid labeling the club as a company.

    Defaults to abstain/recuse unless a vote has been chosen.
  */
  CheckCurrentVote = () => {
    if(!this.props.vote.abstain){
      if(this.props.vote.vote){
        this.setState({ Recuse: false, Nay: false, Aye: true })
      } else {
        this.setState({ Recuse: false, Nay: true, Aye: false })
      }
    } else {
      this.setState({ Recuse: true, Nay: false, Aye: false })
    }
  }

  componentDidMount(){
    this.CheckCurrentVote();
  }

  componentDidUpdate(prevProps){
    if (this.props !== prevProps) {
      this.CheckCurrentVote();
    }
  }

  MoldUpdateVote = (vote) => {
    let votePayload = {
      Id: this.props.vote.id,
      UserId: this.props.vote.userId,
    }

    const decision = Object.assign(votePayload, vote)

    this.props.UpdateVote(decision);
  }

  nay = {
    Vote: false,
    Abstain: false
  }

  recuse = {
    Vote: false,
    Abstain: true
  }

  aye = {
    Vote: true,
    Abstain: false
  }

  
  render(){
    return(
      <ButtonGroup>
        <Button color='danger'disabled={this.state.Nay} onClick={() => this.MoldUpdateVote(this.nay)}>Nay</Button>
        <Button color='info' disabled={this.state.Recuse} onClick={() => this.MoldUpdateVote(this.recuse)}>Recuse</Button>
        <Button color='success'disabled={this.state.Aye} onClick={() => this.MoldUpdateVote(this.aye)}>Aye</Button>
      </ButtonGroup>
    );
  }
}

export default VoteButtons;
