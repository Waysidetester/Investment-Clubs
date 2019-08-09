import React from 'react';
import ClubInvestmentModal from '../../../SiteWide/Modal/ClubInvestmentModal/ClubInvestmentModal';
import { Table } from 'reactstrap';
import './ClubInvestments.scss';

// returns non-pending investment information
class ClubInvestments extends React.Component{
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
  fetchDetail = (invId) => {
    let investment = this.props.clubInvs.find(inv => inv.id === invId)
    this.setState({InvDetail: investment})
  }

  // opens modal and looks for investment detail
  modalBundle = (invId) => {
    this.toggle();
    this.fetchDetail(invId);
  }

  DataRowGenerator = () => {
    return this.props.clubInvs.map((investment, index) => (this.DataRowShape(investment, index)));
  }

  // prints a row of relevant investment data
  DataRowShape = (inv, key) => {
    return (
      <tr key={key} invid={inv.id} onClick={() => this.modalBundle(inv.id)}>
        <td>{inv.receivingEntity}</td>
        <td>{inv.dollarsInvested.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
        <td>{
          inv.investDate !== null 
            ? new Date(inv.investDate).toLocaleDateString('en-US', {dateStyle: 'medium'})
            : ''
        }
        </td>
        <td>{inv.investmentType}</td>
      </tr>
    );
  }

  render(){
    if(this.props.clubInvs.length <= 0){
      return(
        <div>
          <h4>You haven't been able to invest in any assets with this club yet.</h4>
        </div>
      );
    }

    return(
      <div className='club-investment-container'>
        <ClubInvestmentModal modal={this.state.modal} toggle={this.toggle} InvDetail={this.state.InvDetail}/>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Investment In</th>
              <th>Dollars Invested</th>
              <th>Investment Date</th>
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

export default ClubInvestments;
