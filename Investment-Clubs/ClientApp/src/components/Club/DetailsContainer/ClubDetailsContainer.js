import React from 'react';
import ClubDetails from '../Details/ClubDetails';
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import './ClubDetailsContainer.scss';

class ClubDetailsContainer extends React.Component{
  ClubDetailGenerator = () => {
    return this.props.clubDetails.map((club, i) => <ClubDetails key={i} club={club} />);
  }

  render() {
    if(this.props.clubDetails <= 0){
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
          {this.ClubDetailGenerator()}
        </CardBody>
      </Card>
    );
  }
}

export default ClubDetailsContainer;
