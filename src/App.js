import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';

import CreateDeckContainer from './redux/containers/CreateDeckContainer';
import RenderAllDecksPageContainer from './redux/containers/RenderAllDecksPageContainer';
import BattlePageContainer from './redux/containers/BattlePageContainer';
import UpdateDeckPageContainer from './redux/containers/UpdateDeckPageContainer';
import SignUpContainer from './redux/containers/SignUpContainer';
import SignInContainer from './redux/containers/SignInContainer';
import IndexContainer from './redux/containers/IndexContainer';
import HomeContainer from './redux/containers/HomeContainer';

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
                path="/signup"
                component={SignUpContainer}
                history={history}
              />
              <Route
                exact
                path="/home"
                component={HomeContainer}
                history={history}
              />
              <Route
                exact
                path="/"
                component={IndexContainer}
                history={history}
              />
              <Route
                exact
                path="/index"
                component={SignInContainer}
                history={history}
              />
              <Route
                exact
                path="/decks/createDeck"
                component={CreateDeckContainer}
                history={history}
              />
              <Route
                exact
                path="/decks/battle"
                component={BattlePageContainer}
                history={history}
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
                history={history}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
