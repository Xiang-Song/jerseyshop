import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from '../containers/NavBarContianer';
import JerseyListContainer from '../containers/JerseyListContainer.js';
import MyCartContainer from '../containers/MyCartContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBarContainer />
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" component={JerseyListContainer} />
          <Route path="/cart" component={MyCartContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
