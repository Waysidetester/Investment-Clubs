import React from 'react';
import { Table } from 'reactstrap';
import './MyInvestments.scss';

// returns non-pending investment information
class MyInvestments extends React.Component{

  DataRowGenerator = () => {
    return this.props.investments.map((investment, index) => (this.DataRowShape(investment, index)));
  }

  // prints a row of relevant investment data
  DataRowShape = (inv, key) => {
    return (
      <tr key={key}>
        <td>{inv.receivingEntity}</td>
        <td>{inv.percentContributed}</td>
        <td>{inv.partnerContributed}</td>
        <td>{inv.totalInvestment}</td>
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
    );
  }
}

export default MyInvestments;
