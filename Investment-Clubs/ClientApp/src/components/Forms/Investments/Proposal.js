import React from 'react';
import AssetSpecifGen from './AssetType/AssetSpecificGenerator';
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
    fairMarkitValue: null,
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
  }

  checkForValue = (key, val) => {
    if(val){
      return {[key]: val};
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('A name was submitted: ' + this.state);
  }

  render(){
    this.formPutObj()
    return(
      <div>
        <Form autoComplete={'off'} onSubmit={this.handleSubmit}>
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
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Proposal;
