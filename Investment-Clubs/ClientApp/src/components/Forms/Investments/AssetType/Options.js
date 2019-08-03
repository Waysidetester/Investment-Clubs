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
        <FormGroup>
          <Label for="ownershipUnits">Number of Options</Label>{/* Each option is the right to buy/sell 100 shares */}
          <Input type="text" name="ownershipUnits" id="ownershipUnits" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="expirationDate">Expiration Date</Label>
          <Input type="text" name="expirationDate" id="expirationDate" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="strikePrice">Strike Price</Label>
          <Input type="text" name="strikePrice" id="strikePrice" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup tag="fieldset">
            <legend>Option Type</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name='optionType' value='put' onClick={this.props.handleChange} />
                Put
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio"  name='optionType' value='call' onClick={this.props.handleChange} />
                Call
              </Label>
            </FormGroup>
          </FormGroup>
        <p>options</p>
      </React.Fragment>
    );
  }
}

export default OptionsGen;
