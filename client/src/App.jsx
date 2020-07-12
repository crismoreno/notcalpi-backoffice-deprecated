import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './views/Login.jsx';
import Dashboard from './views/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Unauthorised from './views/Unauthorised.jsx';
import NotFound from './views/NotFound.jsx';

import { getAuth } from './reducers/index';

const App = ({ auth }, store) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if (auth.loggedIn === true) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, [auth.loggedIn]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Login store={store} />} />
        <ProtectedRoute
          path="/admin"
          component={Dashboard}
          store={store}
          auth={auth}
        />
        <Route exact path="/unauthorised" component={Unauthorised} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});
export default connect(mapStateToProps)(App);
