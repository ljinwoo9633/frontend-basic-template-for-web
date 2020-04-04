import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Common/Home';
import Login from './Components/User/Login';
import Logout from './Components/User/Logout';
import Register from './Components/User/Register';
import Confirm from './Components/User/Confirm';

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/confirm" component={Confirm} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
