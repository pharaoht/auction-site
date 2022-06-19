import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './containers/layout';
import Home from './containers/home';
import Login from './containers/login';
import YourListings from './containers/yourListings';
import { useSelector } from 'react-redux';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/your-listings' component={YourListings} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
