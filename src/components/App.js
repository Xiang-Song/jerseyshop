import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import JerseyListContainer from '../containers/JerseyListContainer.js';
import MyCart from './MyCart';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={JerseyListContainer} />
          <Route path="/cart" component={MyCart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
