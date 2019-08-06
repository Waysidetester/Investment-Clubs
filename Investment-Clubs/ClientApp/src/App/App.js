import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import MyNav from '../SiteWide/MyNav/MyNav';
import Home from '../Pages/Home/Home';
import Account from '../Pages/Account/Account';
import Club from '../Pages/Club/Club';
import NewInvestment from '../Pages/NewInvestment/NewInvestment';
import Disclaimer from '../SiteWide/Disclaimer/Disclaimer';
import ProspGerm from '../Db/ProspGerm/ProspGermFactory';
import './App.scss';

const RouteWithProps = ({ component: Component, currentUser, ...rest }) => (
  <Route {...rest} render={routeProps => (<Component {...routeProps} currentUser={currentUser} />
  )}/>
);

class App extends React.Component{
  state = {
    userId: window.localStorage.getItem("userId"),
    clubIds: null,
    disclaimer: false,
  }

  componentDidMount(){
    ProspGerm.ClubIds(this.state.userId)
      .then(res => {
        this.setState({clubIds: res.data});
      })
      .catch(err => console.error(err));
  }

  ShowDisclaimer = () => {
    const disclaimerClass = this.state.disclaimer;
    disclaimerClass === true ? this.setState({disclaimer: false}) : this.setState({disclaimer: true});
  }

  render() {
    // parsing userId to int for axios calls
    const currentUser = parseInt(this.state.userId, 10)

    return (
        <div>
          <BrowserRouter>
            <React.Fragment>
              <MyNav clubIds={this.state.clubIds} currentUser={currentUser} ShowDisclaimer={this.ShowDisclaimer}/>
              <Disclaimer display={this.state.disclaimer} />
              <div className='container'>
                <Switch>
                  <RouteWithProps path='/' exact component={Home} currentUser={currentUser} />
                  <RouteWithProps path='/home' component={Home} currentUser={currentUser} />
                  <RouteWithProps path='/account' component={Account} currentUser={currentUser} />} />
                  <RouteWithProps path='/club' component={Club} currentUser={currentUser} />
                  <RouteWithProps path='/proposal' component={NewInvestment} currentUser={currentUser} />
                </Switch>
              </div>
            </React.Fragment>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;