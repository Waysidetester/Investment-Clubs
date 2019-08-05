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
          <Input type="number" name="ownershipUnits" id="ownershipUnits" min='0' onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="percentEquity">% Equity</Label>
          <Input type="number" name="percentEquity" id="percentEquity" min='0' max='100' placeholder='8%' onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="valuation">Valuation</Label>
          <Input type="text" name="valuation" id="valuation" disabled/>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default EquityGen;
