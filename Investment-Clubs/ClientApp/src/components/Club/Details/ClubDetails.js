import React from 'react';
import MyInvestments from '../../Investments/MyInvestments/MyInvestments';
import MyPendingInvestments from '../../Investments/MyPendingInvestments/MyPendingInvestments'
import './ClubDetails.scss';

class ClubDetails extends React.Component{
  render(){
    const dollarsInvested = this.props.club.dollarsInvested;
    const partnerInvestable = this.props.club.partnerInvestable
    return(
      <div className='club-details'>
        <div>
          <p>Total Involved Partners: {this.props.club.partnerCount}</p>
          <p>Acreddited Investor Partners: {this.props.club.accreditedPartnerCount}</p>
          <p>{this.props.selfDirected ? 'Potential ' : ''}Club Investable Capital:{this.props.club.clubInvestable}</p>
          <p>Club: {this.props.club.clubName}</p>
          <p>Currently Funded: {dollarsInvested.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          <p>My current contributions {partnerInvestable.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          <p>{this.props.club.selfDirected ? 'This club is self directed' : 'This club invests as a single unit'}</p>
          <p>Access level: {this.props.club.isAdmin ? 'Administrator' : 'Partner'}</p>
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
