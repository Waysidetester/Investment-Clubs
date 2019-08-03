import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  CustomInput,
} from 'reactstrap';

class DebtGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup>
          <Label for="ownershipUnits">Bonds/Bills</Label>
          <Input type="text" name="ownershipUnits" id="ownershipUnits" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="debtCoupon">Coupon</Label>
          <Input type="text" name="debtCoupon" id="debtCoupon" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="matureDate">Mature Date</Label>
          <Input type="text" name="matureDate" id="matureDate" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="Interval">Interval</Label>
          <CustomInput type="select" id="Interval" name="Interval" onClick={this.props.handleChange}>
            <option value={""}>Select</option>
            <option value="12">Monthly</option>
            <option value="6">Bimonthly (every 2 months)</option>
            <option value="4">Quarterly</option>
            <option value="2">Semi-Annually</option>
            <option value="1">Yearly</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="faceValue">Face Value</Label>
          <Input type="text" name="faceValue" id="faceValue" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="issuePrice">Issue Price</Label>
          <Input type="text" name="issuePrice" id="issuePrice" disabled/>
        </FormGroup>

        <p>debt</p>
      </React.Fragment>
    );
  }
}

export default DebtGen;