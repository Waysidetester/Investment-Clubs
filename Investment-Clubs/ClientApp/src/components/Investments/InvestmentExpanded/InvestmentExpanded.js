import React from 'react';
import VoteButtons from '../../Votes/VoteButtons/VoteButtons';
import './InvestmentExpanded.scss';

class InvestmentExpanded extends React.Component{
  VoteAvailability = () => {
    if(this.props.vote !== undefined){
      return<VoteButtons vote={this.props.vote} UpdateVote={this.props.UpdateVote}/>
    }
  }

  Checker = (val) => {
      // Checks there is a value in current property and adds to the array if true
      if(val !== null){
        return true;
      }
      return false;
  }

  render(){
    return(
    <div>
      <div>
        {this.Checker(this.props.inv.receivingEntity) ? <p>For {this.props.inv.receivingEntity}</p> : null}
        {this.Checker(this.props.inv.ownershipUnits) ? <p>Units: {this.props.inv.ownershipUnits}</p> : null}
        {this.Checker(this.props.inv.dollarsInvested) ? <p>Proposed Investment Price: {this.props.inv.dollarsInvested.toLocaleString('en-US', {style:'currency', currency:'USD'})}</p> : null}
        {this.Checker(this.props.inv.debtCoupon) ? <p>Coupon Rate: {this.props.inv.debtCoupon}</p> : null}
        {this.Checker(this.props.inv.matureDate) ? <p>Maturity Date: {new Date(this.props.inv.matureDate).toLocaleDateString()}</p> : null}
        {this.Checker(this.props.inv.contractPrice) ? <p>Contract Price: {this.props.inv.contractPrice.toLocaleString('en-US', {style:'currency', currency:'USD'})}</p> : null}
        {this.Checker(this.props.inv.percentEquity) ? <p>% Equity: {this.props.inv.percentEquity}</p> : null}
        {this.Checker(this.props.inv.convertable) ? <p>Units: {this.props.inv.convertable ? 'yes' : 'no'}</p> : null}
        {this.Checker(this.props.inv.investmentType) ? <p>Asset Type: {this.props.inv.investmentType}</p> : null}
        {this.Checker(this.props.inv.proposalExpireDate) ? <p>Vote Expiration Date: {new Date(this.props.inv.proposalExpireDate).toLocaleDateString()}</p> : null}
        {this.Checker(this.props.inv.nextCouponPayment) ? <p>Next Coupon Payment on {this.props.inv.nextCouponPayment}</p> : null}
        {this.Checker(this.props.inv.interval) ? <p>Coupon Payment Interval: {this.props.inv.interval}</p> : null}
        {this.Checker(this.props.inv.faceValue) ? <p>Bond Face Value: {this.props.inv.faceValue.toLocaleString('en-US', {style:'currency', currency:'USD'})}</p> : null}
      </div>
      {this.VoteAvailability()}
    </div>
    );
  }
}

export default InvestmentExpanded;
