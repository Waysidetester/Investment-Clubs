import React from 'react';
import ClubDetails from '../Details/ClubDetails';
import {
  Card,
  CardBody,
} from 'reactstrap';
import './ClubDetailsContainer.scss';

class ClubDetailsContainer extends React.Component{
  ClubDetailGenerator = () => {
    return this.props.clubDetails.map((club, i) => {
        const sortedInvests = this.MatchedInvestments(club);
        return <ClubDetails 
                  key={i}
                  club={club} 
                  investments={sortedInvests.investmentsInClub}
                  pendingInv={sortedInvests.pendingInvestInClub}
                  pendingVotes={sortedInvests.pendingVotesInClub}
                  UpdateVote={this.props.UpdateVote}
                />
      }
    );
  }

  MatchedInvestments = (club) => {
    return({
      investmentsInClub: this.props.investmentDetails.filter(
        investment => investment.clubId === club.clubId
      ),
      pendingInvestInClub: this.props.pendingInvestments.filter(
        pendInv => pendInv.clubId === club.clubId
      ),
      pendingVotesInClub: this.props.votes.filter(
        pendVote => pendVote.clubId === club.clubId
      )
    });
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
      <div>
        <h2>Your Clubs</h2>
        <Card>
          <CardBody>
            {this.ClubDetailGenerator()}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ClubDetailsContainer;
