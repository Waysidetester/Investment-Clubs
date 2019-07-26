import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import './Account.scss';

class Account extends React.Component{

  componentDidMount(){
    this.DbCalls([
      {funct: ProspGerm.GetClubDetailsForUser, stateName: 'clubDetails'},
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
      </div>
    );
  }
}

export default Account;
