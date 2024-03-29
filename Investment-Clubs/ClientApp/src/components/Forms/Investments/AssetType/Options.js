import React from 'react';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class OptionsGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup >
          <Label for="ownershipUnits">Number of Options</Label>{/* Each option is the right to buy/sell 100 shares */}
          <Input 
            type="number"
            name="ownershipUnits"
            id="ownershipUnits"
            onChange={this.props.handleChange}
            min='0'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="matureDate">Expiration Date</Label>
          <Input
            type="date"
            name="matureDate"
            id="matureDate"
            onChange={this.props.handleChange}
            min={Date.now()}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="contractPrice">Strike Price</Label>
          <Input
            type="number"
            name="contractPrice"
            id="contractPrice"
            onChange={this.props.handleChange}
            min="0"
            placeholder="0.00"
            required
          />
        </FormGroup>
        <FormGroup tag="fieldset">
            <legend>Option Type</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name='optionType' value='put' onClick={this.props.handleChange} required/>
                Put
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio"  name='optionType' value='call' onClick={this.props.handleChange} required/>
                Call
              </Label>
            </FormGroup>
          </FormGroup>
      </React.Fragment>
    );
  }
}

export default OptionsGen;
