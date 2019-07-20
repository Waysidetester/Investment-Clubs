import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import ClubsBasicsContainer from '../../components/Club/ClubsBasicsContainer';
import './Home.scss';

class Home extends React.Component{
  state = {
    clubs: null,
  }

  componentDidMount(){
    ProspGerm.GetClubsForUser(this.props.currentUser)
      .then((res) => {
        this.setState({ clubs: res.data })
      })
      .catch((err) => console.error(err));
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
