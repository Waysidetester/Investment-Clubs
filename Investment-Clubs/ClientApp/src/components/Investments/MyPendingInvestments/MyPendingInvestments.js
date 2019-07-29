import React from 'react';
import InvestmentExpanded from '../InvestmentExpanded/InvestmentExpanded';
import './MyPendingInvestments.scss';

class MyPendingInvestments extends React.Component{
  DisplayAll = () => {
    if(this.props.pendingInv[0] !== undefined){
      let keys = Object.keys(this.props.pendingInv[0]);
      keys.splice(keys.indexOf('clubId'),1);
      keys.splice(keys.indexOf('investmentId'),1);
      console.log('keys', keys);

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
