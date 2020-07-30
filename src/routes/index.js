import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Pokedex from '../pages/Pokedex'
import Favorites from '../pages/Favorites'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pokedex}></Route>
      <Route path="/" component={Favorites}></Route>
    </Switch>
  );
};

export default Routes;