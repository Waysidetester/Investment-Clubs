import React from 'react';
import './PartnerList.scss';

class PartnerList extends React.Component{

  Partners = () => {
    let allPartners = []
    for(let i = 0; i < this.props.partners.length; i++){
      allPartners.push(<li key={i}>{this.props.partners[i].firstName} {this.props.partners[i].lastName}</li>)
    }
    return allPartners;
  }

  render(){
    if(this.props.partners !== null){
      return(
        <ul>
          {this.Partners()}
        </ul>
      );
    }

    return(
      <p>There are no partners</p>
    )
  }
}

export default PartnerList;
