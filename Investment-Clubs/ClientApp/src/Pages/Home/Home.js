import React from 'react';
import ProspGerm from '../../Db/ProspGerm/ProspGermFactory';
import './Home.scss';

class Home extends React.Component{
  
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
      </div>
    );
  }
}

export default Home;
