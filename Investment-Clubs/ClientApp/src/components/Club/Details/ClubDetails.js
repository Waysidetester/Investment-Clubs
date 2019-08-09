import React from 'react';
import MyInvestments from '../../Investments/MyInvestments/MyInvestments';
import MyPendingInvestments from '../../Investments/MyPendingInvestments/MyPendingInvestments'
import './ClubDetails.scss';

class ClubDetails extends React.Component{
  render(){
    const dollarsInvested = this.props.club.dollarsInvested;
    const partnerInvestable = this.props.club.partnerInvestable

    const nonAccreditedPartners = this.props.club.partnerCount - this.props.club.accreditedPartnerCount;

    return(
      <div className='club-details'>
        <div className='single-club-basics'>
          <h3 className='single-club-title'>{this.props.club.clubName}</h3>
          <p className='single-club-investable'>{this.props.selfDirected ? 'Potential ' : ''}Club Investable Capital:{this.props.club.clubInvestable}</p>
          <p className='single-club-type'>{this.props.club.selfDirected ? 'This club is self directed' : 'This club invests as a single unit'}</p>
          <div className='single-club-partner-group'>
            <p className='single-club-total-partners'>Total Involved Partners: {this.props.club.partnerCount}</p>
            <div className='basic-accredited-counts'>
              <p className='accredited-count-item'>Acreddited Investor Partners: {this.props.club.accreditedPartnerCount}</p>
              <p className='accredited-count-item'>{nonAccreditedPartners > 0 ? `Non-Accredited: ${nonAccreditedPartners}` : '0'}</p>
            </div>
          </div>
          <div className='club-financial-info'>
            <p>Currently Funded: {dollarsInvested.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
            <p>My Monthly Contribution: {partnerInvestable.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          </div>
        </div>
        <MyInvestments investments={this.props.investments}/>
        <MyPendingInvestments
          pendingInv={this.props.pendingInv}
          votes={this.props.pendingVotes}
          UpdateVote={this.props.UpdateVote}
        />
      </div>
    );
  }
}

export default ClubDetails;
