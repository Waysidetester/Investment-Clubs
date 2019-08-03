import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  CustomInput,
} from 'reactstrap';

const AssetSpecificGenerator = (assetType, handleChange) => {
  switch (assetType) {
    case '1':{
      return <EquityGen handleChange={handleChange}/>;
    }
    case '2':{
      return <DebtGen handleChange={handleChange}/>;
    }
    case'3':{
      return <OptionsGen handleChange={handleChange}/>;
    }
    default:{
      return null;
    }
  }
}

class EquityGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup>
          <Label for="ownershipUnits">Shares</Label>
          <Input type="text" name="ownershipUnits" id="ownershipUnits" />
        </FormGroup>

        <p>equity</p>
      </React.Fragment>
    );
  }
}

class DebtGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup>
          <Label for="ownershipUnits">Bonds/Bills</Label>
          <Input type="text" name="ownershipUnits" id="ownershipUnits" />
        </FormGroup>
        <FormGroup>
          <Label for="debtCoupon">Coupon</Label>
          <Input type="text" name="debtCoupon" id="debtCoupon" />
        </FormGroup>
        <FormGroup>
          <Label for="matureDate">Mature Date</Label>
          <Input type="text" name="matureDate" id="matureDate" />
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
          <Input type="text" name="faceValue" id="faceValue" />
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

class OptionsGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup>
          <Label for="ownershipUnits">Share Limit</Label>
          <Input type="text" name="ownershipUnits" id="ownershipUnits" />
        </FormGroup>
        <p>options</p>
      </React.Fragment>
    );
  }
}

export default AssetSpecificGenerator;