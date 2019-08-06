import React from 'react';
import InvestmentModal from '../../../SiteWide/Modal/InvestmentModal/InvestmentModal';
import { Table } from 'reactstrap';
import ProspGerm from '../../../Db/ProspGerm/ProspGermFactory';
import './MyInvestments.scss';

// returns non-pending investment information
class MyInvestments extends React.Component{
  state = {
    modal: false,
    InvDetail: null,
  };

  // Opens and closes modal
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // Gets clicked investment detail and sets it to state
  fetchDetail = (invId, partnerId) => {
    ProspGerm.GetInvestmentDetails(partnerId, invId)
      .then((res) => {
        this.setState({InvDetail: res.data})
      })
      .catch(err => console.error(err));
  }

  // opens modal and looks for investment detail
  modalBundle = (invId, partnerId) => {
    this.toggle();
    this.fetchDetail(invId, partnerId);
  }

  DataRowGenerator = () => {
    return this.props.investments.map((investment, index) => (this.DataRowShape(investment, index)));
  }

  // prints a row of relevant investment data
  DataRowShape = (inv, key) => {
    return (
      <tr key={key} invid={inv.investmentId} onClick={() => this.modalBundle(inv.investmentId, inv.partnerId)}>
        <td>{inv.receivingEntity}</td>
        <td>{inv.percentContributed*100}%</td>
        <td>{inv.partnerContributed.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
        <td>{inv.totalInvestment.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
        <td>{inv.investmentType}</td>
      </tr>
    );
  }

  render(){
    if(this.props.investments.length <= 0){
      return(
        <div>
          <h4>You haven't been able to invest in any assets with this club yet.</h4>
        </div>
      );
    }

    return(
      <div>
        <InvestmentModal modal={this.state.modal} toggle={this.toggle} InvDetail={this.state.InvDetail}/>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Investment In</th>
              <th>Percent Contributed as Partner</th>
              <th>Capital Contributed as Partner</th>
              <th>Club Investment Amount</th>
              <th>Security Type</th>
            </tr>
          </thead>
          <tbody>
            {this.DataRowGenerator()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MyInvestments;
