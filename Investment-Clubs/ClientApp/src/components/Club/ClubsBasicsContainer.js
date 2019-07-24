import React from 'react';
import ClubBasics from './ClubBasics';
import {
  Card,
  CardTitle,
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
      <Card>
        <CardBody className='home-clubs-container'>
          <CardTitle><h2>Clubs</h2></CardTitle>
        </CardBody>
        <CardBody>
          {this.ClubBasicsGenerator()}
        </CardBody>
      </Card>
    );
  }
}

export default ClubsBasicsContainer