import React from 'react';
import './PartnerList.scss';

class PartnerList extends React.Component{

  Partners = () => {
    let allPartners = []
    for(let i = 0; i < this.props.partners.length; i++){
      allPartners.push(<span className='partner-in-club' key={i}>{this.props.partners[i].firstName} {this.props.partners[i].lastName}</span>)
    }
    return allPartners;
  }

  render(){
    if(this.props.partners !== null){
      return(
        <div>
          <span>Partners In Club</span>
          <div className='club-partner-list-container'>
            {this.Partners()}
          </div>
        </div>
      );
    }

    return(
      <p>There are no partners</p>
    )
  }
}

export default PartnerList;
