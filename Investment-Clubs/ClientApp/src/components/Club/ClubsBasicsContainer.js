import React from 'react';
import ClubBasics from './ClubBasics';
import {
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';
import './ClubsBasics.scss';

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
        <CardBody>
          <CardTitle>Hello</CardTitle>
        </CardBody>
        <CardBody>
          {this.ClubBasicsGenerator()}
        </CardBody>
      </Card>
    );
  }
}

export default ClubsBasicsContainer