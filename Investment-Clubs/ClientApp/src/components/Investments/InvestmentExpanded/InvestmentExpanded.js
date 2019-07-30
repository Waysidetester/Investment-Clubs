import React from 'react';
import VoteButtons from '../../Votes/VoteButtons/VoteButtons';
import './InvestmentExpanded.scss';

class InvestmentExpanded extends React.Component{
  VoteAvailability = () => {
    if(this.props.vote !== undefined){
      return<VoteButtons vote={this.props.vote} UpdateVote={this.props.UpdateVote}/>
    }
  }

  Expander = () => {
    // empty array for jsx to be pushed
    let pendInvProps = []

    this.props.keys.forEach((key, index) => {

      // Checks there is a value in current property and adds to the array if true
      if(this.props.inv[key] !== null){
        pendInvProps.push(<p key={index}>{key}: {this.props.inv[key]}</p>);
      }
      
    });

    // React can render each item of an array that is JSX
    return pendInvProps;
  }

  render(){
    return(
    <div>
      {this.VoteAvailability()}
      {this.Expander()}
    </div>
    );
  }
}

export default InvestmentExpanded;
