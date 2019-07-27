import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import ClubDetailsContainer from '../../components/Club/DetailsContainer/ClubDetailsContainer';
import './Account.scss';

class Account extends React.Component{
  state={
    clubDetails: [],
    investmentDetails: [],
    pendingInvestments: [],
  }


  componentDidMount(){
    this.DbCalls([
      {funct: ProspGerm.GetClubDetailsForUser, stateName: 'clubDetails'},
      {funct: ProspGerm.GetUsersInvestments, stateName: 'investmentDetails'},
      {funct: ProspGerm.GetPendingInvestments, stateName: 'pendingInvestments'}
    ]);
  }

  DbCalls = (asyncCalls) => {
    asyncCalls.forEach(call => {
      call['funct'](this.props.currentUser)
        .then((res) => {
          const name = call['stateName'];
          this.setState({ [name]: res.data })
        })
        .catch((err) => console.error(err));
    });
  }

  render() {
    return(
      <div>
        <h2>Account</h2>
        <ClubDetailsContainer 
          clubDetails={this.state.clubDetails}
          investmentDetails={this.state.investmentDetails} 
          pendingInvestments={this.state.pendingInvestments}
        />
      </div>
    );
  }
}

export default Account;
