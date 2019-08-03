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

class OptionsGen extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FormGroup>
          <Label for="ownershipUnits">Number of Options</Label>{/* Each option is the right to buy/sell 100 shares */}
          <Input type="text" name="ownershipUnits" id="ownershipUnits" />
        </FormGroup>
        <FormGroup>
          <Label for="expirationDate">Expiration Date</Label>
          <Input type="text" name="expirationDate" id="expirationDate" />
        </FormGroup>
        <FormGroup>
          <Label for="strikePrice">Strike Price</Label>
          <Input type="text" name="strikePrice" id="strikePrice" />
        </FormGroup>
        <FormGroup>
          <Label for="optionType">Put/Call</Label>
          <Input type="text" name="optionType" id="optionType" />
        </FormGroup>
        <p>options</p>
      </React.Fragment>
    );
  }
}

export default AssetSpecificGenerator;