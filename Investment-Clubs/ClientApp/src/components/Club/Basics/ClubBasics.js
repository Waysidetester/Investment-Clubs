import React from 'react';
import './ClubBasics.scss';
class ClubBasics extends React.Component{
  render() {
    const nonAccreditedPartners = this.props.club.partnerCount - this.props.club.accreditedPartnerCount;

    return(
      <div className="single-club-basics">
        <h3 className='single-club-title'>{this.props.club.clubName}</h3>
        <p className='single-club-investable'>Investable: {this.props.club.clubInvestable.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
        <p className='single-club-type'>Club Type - {this.props.club.selfDirected ? "Self Directed " : "Group Purchasing "}Club</p>
        <div className='single-club-partner-group'>
          <strong>Total partners: {this.props.club.partnerCount}</strong>
          <div className='basic-accredited-counts'>
            <p className='accredited-count-item'>Accredited: {this.props.club.accreditedPartnerCount}</p>
            <p className='accredited-count-item'>{nonAccreditedPartners > 0 ? `Non-Accredited: ${nonAccreditedPartners}` : '0'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClubBasics
