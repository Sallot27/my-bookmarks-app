import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
    </Router>
  );
};

export default App;