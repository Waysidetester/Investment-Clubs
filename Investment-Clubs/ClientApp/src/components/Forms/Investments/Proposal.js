import React from 'react';
import AssetSpecifGen from './AssetType/AssetSpecificGenerator';
import ProspGermFactory from '../../../Db/ProspGerm/ProspGermFactory';
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button,
} from 'reactstrap';
import './Proposal.scss';

class Proposal extends React.Component{
  state = {
    assetType: null,
    contractPrice: null,
    debtCoupon: null,
    dollarsInvested: null,
    faceValue: null,
    matureDate: null,
    nextCouponPayment: null,
    ownershipUnits: null,
    percentEquity: null,
    receivingEntity: null
  }

  formPutObj = () => {
    const investment = {};

    for(const [key, value] of Object.entries(this.state)){
      const validObj = this.checkForValue(key, value);
      Object.assign(investment, validObj)
    }

    investment.clubId = this.getThatClub(this.props.location.search);
    return investment;
  }

  checkForValue = (key, val) => {
    if(val){
      return this.parser(key, val);
    }
  }

  parser = (key, val) => {
    if(isNaN(val)){
      // if(isNaN(Date.parse(val))){

        // if this value can't be made a num or date, return as a string
        return {[key]: val};
      // }

      // if this value can't be made a num return the value as a date value
      // return {[key]: Date.parse(val)};
    }

    // return the value as a float type
    return {[key]: parseFloat(val)}
  }

  getThatClub = (searchParams) => {
    let startIndex = searchParams.indexOf('clubId=')
    let idEnd = searchParams.indexOf('&',startIndex)
    let justBeforeIdIndex = searchParams.indexOf('=',startIndex)
    if (idEnd === -1){
      
      return searchParams.substring(justBeforeIdIndex + 1)
    }
    return searchParams.substring(justBeforeIdIndex + 1, idEnd)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const newInvestment = this.formPutObj();
    console.log(this.state, typeof(this.state))
    console.log(newInvestment, typeof(newInvestment))
    ProspGermFactory.ProposeInvestment(newInvestment)
      .then(res => console.log(res.data))
      .catch(err => console.error(err)
    );
  }

  render(){
    return(
      <div>
        <Form autoComplete={'off'} onSubmit={(e) => this.handleSubmit(e)}>
          <FormGroup tag="fieldset" required>
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name='assetType' value='1' onClick={this.handleChange} />
                Equity
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio"  name='assetType' value='2' onClick={this.handleChange} />
                Debt
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name='assetType' value='3' onClick={this.handleChange} />
                Options
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup required>
            <Label for="receivingEntity" required>Issuing Holder's Name/Doing Business As</Label>
            <Input type="text" name="receivingEntity" id="receivingEntity" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup required>
            <Label for="dollarsInvested" required>Proposed Amount</Label>
            <Input type="number" name="dollarsInvested" id="dollarsInvested" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup required>
            <Label for="proposalExpireDate" required>Proposal Expiration Date</Label>
            <Input type="date" min={Date.now()} name="proposalExpireDate" id="proposalExpireDate" onChange={this.handleChange}/>
          </FormGroup>
          {AssetSpecifGen(this.state.assetType, this.handleChange)}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Proposal;
