import React from 'react';
import ClubBasics from '../Basics/ClubBasics';
import {
  Card,
  CardBody,
} from 'reactstrap';
import './ClubsBasicsContainer.scss';

class ClubsBasicsContainer extends React.Component{
  ClubBasicsGenerator = () => {
    return this.props.clubs.map((club, i) => <ClubBasics key={i} club={club} />);
  }

  render() {
    if(this.props.clubs <= 0){
      return (
        <Card>
          <p>you are part of no clubs</p>
        </Card>
      )
    }

    return(
      <div className='home-club-card'>
        <h3>Your Clubs</h3>
        <Card >
          <CardBody>
            {this.ClubBasicsGenerator()}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ClubsBasicsContainer