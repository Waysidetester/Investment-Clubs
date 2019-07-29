import React from 'react';
import './InvestmentExpanded.scss';

class InvestmentExpanded extends React.Component{
  Expander = () => {
    let x = []
    this.props.keys.forEach(key => {
      if(this.props.inv[key] !== null){
        x.push(<p>{key}: {this.props.inv[key]}</p>);
      }
    });
    return x;
  }

  render(){
    return(
    <div>
      {this.Expander()}
    </div>
    );
  }
}

export default InvestmentExpanded;
