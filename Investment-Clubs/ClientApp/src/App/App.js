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
  state = {
    userId: window.localStorage.getItem("userId")
  }
  render() {
    // parsing userId to int for axios calls
    const currentUser = parseInt(this.state.userId, 10)

    return (
        <div>
          <BrowserRouter>
            <React.Fragment>
              <MyNav />
              <Switch>
                <Route path='/' exact render={() => <Home currentUser={currentUser} />} />
                <Route path='/home' render={() => <Home currentUser={currentUser} />} />
                <Route path='/account' render={() => <Account currentUser={currentUser} />} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </div>
    );
  }
}
