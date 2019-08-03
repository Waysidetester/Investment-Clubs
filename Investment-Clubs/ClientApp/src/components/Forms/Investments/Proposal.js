import React from 'react';
import AssetSpecifGen from './AssetSpecificGenerator';
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
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <Form>
          <FormGroup tag="fieldset">
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
          <FormGroup>
            <Label for="receivingEntity">Issuing Holder's Name/Doing Business As</Label>
            <Input type="text" name="receivingEntity" id="receivingEntity" />
          </FormGroup>
          <FormGroup>
            <Label for="dollarsInvested">Proposed Amount</Label>
            <Input type="text" name="dollarsInvested" id="dollarsInvested" />
          </FormGroup>
          {AssetSpecifGen(this.state.assetType, this.handleChange)}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Proposal;
