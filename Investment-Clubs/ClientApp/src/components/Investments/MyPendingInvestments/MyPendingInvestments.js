import React from 'react';
import InvestmentExpanded from '../InvestmentExpanded/InvestmentExpanded';
import './MyPendingInvestments.scss';

class MyPendingInvestments extends React.Component{
  SelectVote = (invId) => {
    if(this.props.votes.length > 0){
      let matchedVote = this.props.votes.find(vote => vote.investmentId === invId.investmentId);
      debugger;
      return matchedVote;
    }
  }
  
  DisplayAll = () => {
  
    // ensures data is present in array
    if(this.props.pendingInv[0] !== undefined){

      // gets the keys of the first object. All objects should have the same keys in the array.
      let keys = Object.keys(this.props.pendingInv[0]);

      // removes the IDs from the `keys` array
      keys.splice(keys.indexOf('clubId'),1);
      keys.splice(keys.indexOf('investmentId'),1);

      

      // returns component for each investment that's pending
      return this.props.pendingInv.map(inv => {
        const vote = this.SelectVote(inv.investmentId)
        return (<InvestmentExpanded
          key={inv.investmentId}
          inv={inv}
          keys={keys}
          vote={vote}
        />)
      });
    }
  }

  render(){
    return(
      <div>
        {this.DisplayAll()}
      </div>
    );
  }
}

export default MyPendingInvestments;
