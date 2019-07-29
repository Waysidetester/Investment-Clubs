import React from 'react';
import './InvestmentExpanded.scss';

class InvestmentExpanded extends React.Component{
  Expander = () => {
    
    // empty array for jsx to be pushed
    let pendInvProps = []

    this.props.keys.forEach(key => {

      // Checks there is a value in current property and adds to the array if true
      if(this.props.inv[key] !== null){
        pendInvProps.push(<p>{key}: {this.props.inv[key]}</p>);
      }
      
    });

    // React can render each item of an array that is JSX
    return pendInvProps;
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
