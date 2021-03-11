import React from 'react';
import {LandingPage} from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import {Search} from './Search/Search';

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}></Route>
      <Route path='/' component={LandingPage}></Route>
    </Switch>

  );
}

export default App;
