import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Details } from './components/Details';
import { Profile } from './components/Profile';
import { Error } from './components/Error';
import { EQZContext } from './context/earthquake-zen-context';
import data from './data.json';

const App = () => {
  return (
    <EQZContext.Provider value={{ data }}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/details/:featureId" component={Details} />
            <Route path="/profile" component={Profile} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </EQZContext.Provider>
  );
};

export default hot(App);
