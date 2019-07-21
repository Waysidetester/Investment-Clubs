import React from 'react';
import './ClubBasics.scss';

class ClubBasics extends React.Component{
  render() {
    return(
      <div className='single-club-basics'>
        <p>Club: {this.props.club.clubName}</p>
        <p>Total partners: {this.props.club.partnerCount}</p>
        <p>Accredited partners: {this.props.club.accreditedPartnerCount}</p>
        <p>Investable capital: {this.props.club.clubInvestable}</p>
        <p>self directed fund? {this.props.club.selfDirected}</p>
      </div>
    );
  }
}

export default ClubBasics
