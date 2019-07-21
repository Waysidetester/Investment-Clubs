import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import ClubsBasicsContainer from '../../components/Club/ClubsBasicsContainer';
import './Home.scss';

class Home extends React.Component{
  state = {
    clubs: null,
  }

  componentDidMount(){
    this.DbCalls([
      {funct: ProspGerm.GetClubsForUser, stateName: 'clubs'},
      {funct: ProspGerm.GetVotesForUser, stateName:'votes'}
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
        <h1>Home page</h1>
        <ClubsBasicsContainer clubs={this.state.clubs}/>
      </div>
    );
  }
}

export default Home;
