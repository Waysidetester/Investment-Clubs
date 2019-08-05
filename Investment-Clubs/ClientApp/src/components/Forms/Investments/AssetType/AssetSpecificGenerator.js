import React from 'react';
import OptionsGen from './Options';
import DebtGen from './Debt';
import EquityGen from './Equity';


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




export default AssetSpecificGenerator;