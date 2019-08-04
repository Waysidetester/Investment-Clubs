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
        <FormGroup required>
          <Label for="ownershipUnits"># of Bonds/Bills</Label>
          <Input type='number'
            name="ownershipUnits"
            id="ownershipUnits"
            onChange={this.props.handleChange}
            min='0'
            placeholder='10'
          />
        </FormGroup>
        <FormGroup>
          <Label for="debtCoupon">Coupon</Label>
          <Input
            type="number"
            name="debtCoupon"
            id="debtCoupon"
            onChange={this.props.handleChange}
            min='0'
            max='100'
            placeholder='5%'
          />
        </FormGroup>
        <FormGroup>
          <Label for="matureDate">Mature Date</Label>
          <Input type="date" name="matureDate" id="matureDate" onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="nextCouponPayment">Next Coupon Date</Label>
          <Input type="date" name="nextCouponPayment" id="nextCouponPayment" onChange={this.props.handleChange}/>
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
          <Input type="number" name="faceValue" id="faceValue" min='0' onChange={this.props.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="issuePrice">Issue Price</Label>
          <Input type="number" name="issuePrice" id="issuePrice" min='0' disabled/>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default DebtGen;