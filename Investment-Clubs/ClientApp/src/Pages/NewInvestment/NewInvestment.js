import React from 'react';
import Proposal from '../../components/Forms/Investments/Proposal';
import './NewInvestment.scss';

class NewInvestment extends React.Component{
  render(){
    return(
      <div>
        <h1>New Investment Page</h1>
        <Proposal location={this.props.location}/>
      </div>
    );
  }
}

export default NewInvestment;
