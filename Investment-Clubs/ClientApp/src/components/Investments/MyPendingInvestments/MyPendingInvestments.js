import React from 'react';
import InvestmentExpanded from '../InvestmentExpanded/InvestmentExpanded';
import './MyPendingInvestments.scss';

class MyPendingInvestments extends React.Component{
  DisplayAll = () => {
    
    // ensures data is present in array
    if(this.props.pendingInv[0] !== undefined){

      // gets the keys of the first object. All objects should have the same keys in the array.
      let keys = Object.keys(this.props.pendingInv[0]);

      // removes the IDs from the `keys` array
      keys.splice(keys.indexOf('clubId'),1);
      keys.splice(keys.indexOf('investmentId'),1);

      // returns component for each investment that's pending
      return this.props.pendingInv.map(inv => <InvestmentExpanded key={inv.investmentId} inv={inv} keys={keys}/>);
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
