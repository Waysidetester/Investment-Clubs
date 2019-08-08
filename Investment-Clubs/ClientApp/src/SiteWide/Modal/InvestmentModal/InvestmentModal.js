import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from 'reactstrap';
import './InvestmentModal.scss';

class InvestmentModal extends React.Component{
  valCheck = (text, value) => {
    if(value !== null){
      if(text === 'Bond Coupon: ' || text === 'Equity Bought: '){
        return <p>{text}{value.toLocaleString('en-US', {style: 'percent', maximumFractionDigits: 3})}</p>
      }
      return <p>{text}{value}</p>
    }
  }

  render(){
    if(this.props.InvDetail !== null){
      return(
          <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}>{this.props.InvDetail.receivingEntity}</ModalHeader>
            <ModalBody>
              <p>Investment Type: {this.props.InvDetail.investmentType}</p>
              {this.valCheck('Club Investment Amount: ',this.props.InvDetail.dollarsInvested.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))}
              {this.valCheck('Bond Coupon: ', this.props.InvDetail.debtCoupon)}
              {this.valCheck('Asset Units Purchased: ',this.props.InvDetail.ownershipUnits)}
              {this.valCheck('Convertable: ',(this.props.InvDetail.convertable ? 'Yes':'No'))}
              {this.valCheck('Date Bond Matures: ',this.props.InvDetail.matureDate)}
              {this.valCheck('Equity Bought: ',this.props.InvDetail.percentEquity)}
              {this.valCheck('Date Invested: ',new Date(this.props.InvDetail.investDate).toLocaleDateString())}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
      );
    }

    return(
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}><Spinner color='info' /></ModalHeader>
        <ModalBody>
          <Spinner color='info' />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default InvestmentModal;