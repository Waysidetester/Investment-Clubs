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
      // returns true if the object key's value is true
      if(val !== null){
        return true;
      }
      return false;
  }

  render(){
    return(
    <div className='investment-expanded-detail-container'>
      {/* check if there is a value and return info if there is */}
      {this.Checker(this.props.inv.receivingEntity) ? <h3>Offering Party: {this.props.inv.receivingEntity}</h3> : null}
      <div className='investment-expanded-details'>
        {this.Checker(this.props.inv.ownershipUnits) ? <div className='investment-expanded-detail-item'>Units: {this.props.inv.ownershipUnits}</div> : null}
        {this.Checker(this.props.inv.dollarsInvested) ? <div className='investment-expanded-detail-item'>Proposed Investment Price: {this.props.inv.dollarsInvested.toLocaleString('en-US', {style:'currency', currency:'USD'})}</div> : null}
        {this.Checker(this.props.inv.debtCoupon) ? <div className='investment-expanded-detail-item'>Coupon Rate: {this.props.inv.debtCoupon}</div> : null}
        {this.Checker(this.props.inv.matureDate) ? <div className='investment-expanded-detail-item'>Maturity Date: {new Date(this.props.inv.matureDate).toLocaleDateString()}</div> : null}
        {this.Checker(this.props.inv.contractPrice) ? <div className='investment-expanded-detail-item'>Contract Price: {this.props.inv.contractPrice.toLocaleString('en-US', {style:'currency', currency:'USD'})}</div> : null}
        {this.Checker(this.props.inv.percentEquity) ? <div className='investment-expanded-detail-item'>Percent Equity: {this.props.inv.percentEquity}</div> : null}
        {this.Checker(this.props.inv.convertable) ? <div className='investment-expanded-detail-item'>Convertable Asset</div> : null}
        {this.Checker(this.props.inv.investmentType) ? <div className='investment-expanded-detail-item'>Asset Type: {this.props.inv.investmentType}</div> : null}
        {this.Checker(this.props.inv.proposalExpireDate) ? <div className='investment-expanded-detail-item'>Vote Expiration Date: {new Date(this.props.inv.proposalExpireDate).toLocaleDateString()}</div> : null}
        {this.Checker(this.props.inv.nextCouponPayment) ? <div className='investment-expanded-detail-item'>Next Coupon Payment on {this.props.inv.nextCouponPayment}</div> : null}
        {this.Checker(this.props.inv.interval) ? <div className='investment-expanded-detail-item'>Coupon Payment Interval: {this.props.inv.interval}</div> : null}
        {this.Checker(this.props.inv.faceValue) ? <div className='investment-expanded-detail-item'>Bond Face Value: {this.props.inv.faceValue.toLocaleString('en-US', {style:'currency', currency:'USD'})}</div> : null}
      </div>
      {this.VoteAvailability()}
    </div>
    );
  }
}

export default InvestmentExpanded;
