import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';

import PokemonPageContainer from './redux/containers/PokemonPageContainer';
import RenderAllDecksPageContainer from './redux/containers/RenderAllDecksPageContainer';
import BattlePageContainer from './redux/containers/BattlePageContainer';
import UpdateDeckPageContainer from './redux/containers/UpdateDeckPageContainer';
import SignInContainer from './redux/containers/SignInContainer';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={PokemonPageContainer}
                history={history}
              />
              <Route
                exact
                path="/decks/battle"
                component={BattlePageContainer}
              />
              <Route
                exact
                path="/decks/render"
                component={RenderAllDecksPageContainer}
                history={history}
              />
              <Route
                exact
                path="/decks/:deckId/update"
                component={UpdateDeckPageContainer}
              />
              <Route exact path="/signup" component={SignInContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
