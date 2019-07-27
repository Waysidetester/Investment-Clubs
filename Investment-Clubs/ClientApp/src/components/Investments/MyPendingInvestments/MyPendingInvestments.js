import React from 'react';
import './MyPendingInvestments.scss';

class MyPendingInvestments extends React.Component{
  DisplayAll = () => {
    keys = Object.keys(this.props.pendingInv);
    keys.splice(keys.indexOf('clubId'));
    keys.splice(keys.indexOf('investmentId'));

    keys.forEach(element => {
      <p
    });
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

export default MyPendingInvestments;
