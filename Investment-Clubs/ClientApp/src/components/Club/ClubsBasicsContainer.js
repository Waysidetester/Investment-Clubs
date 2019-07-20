import React from 'react';
import ClubBasics from './ClubBasics';
import './ClubsBasics.scss';

class ClubsBasicsContainer extends React.Component{
  ClubBasicsGenerator = () => {
    return this.props.clubs.map(club => <ClubBasics club={club} />);
  }

  render() {
    if(this.props.clubs <= 0){
      return (
        <div>
          <p>you are part of no clubs</p>
        </div>
      )
    }

    return(
      <div>
        {this.ClubBasicsGenerator()}
      </div>
    );
  }
}

export default ClubsBasicsContainer