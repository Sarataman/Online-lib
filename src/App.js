import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Library from './containers/Library';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

class App extends Component {
  render()  {
    return (
      <div>
         <Switch>
          <Route exact path="/"component={Login} />
          <Route exact path="/signup"component={SignUp} />
          <Route path="/library"component={Library} />
          <Route component={Error} />
        </Switch>   
    </div>
    );
  }
}


export default App;
