import React from 'react';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import './Disclaimer.scss';

class Disclaimer extends React.Component{
  render(){
    if(!this.props.display){
      return (<div/>)
    }

    return(
      <div className='p-3 bg-danger disclaimer rounded'>
        <Toast className='disclaimer-toast'>
          <ToastHeader>
            WARNING!
          </ToastHeader>
          <ToastBody>
            We cannot be held liable for any injury, financial or otherwise,
            that arises from using this web application. It is a student project,
            and not intended for investment decisions.
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default Disclaimer;
