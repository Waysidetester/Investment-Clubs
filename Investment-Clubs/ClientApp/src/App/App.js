import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import MyNav from '../SiteWide/MyNav/MyNav';
import Home from '../Pages/Home/Home';
import Account from '../Pages/Account/Account';


export default class App extends React.Component{
  render() {
    return (
        <div>
          <BrowserRouter>
            <React.Fragment>
              <MyNav />
              <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home} />
                <Route path='/account' component={Account} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </div>
    );
  }
}
