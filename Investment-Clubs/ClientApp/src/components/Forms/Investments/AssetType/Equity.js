import React from 'react';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class EquityGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup>
          <Label for="ownershipUnits">Shares</Label>
          <Input type="text" name="ownershipUnits" id="ownershipUnits" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="percentEquity">% Equity</Label>
          <Input type="text" name="percentEquity" id="percentEquity" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="fairMarkitValue">Fair Market Value</Label>
          <Input type="text" name="fairMarkitValue" id="fairMarkitValue" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="valuation">Valuation</Label>
          <Input type="text" name="valuation" id="valuation" disabled/>
        </FormGroup>

        <p>equity</p>
      </React.Fragment>
    );
  }
}

export default EquityGen;
