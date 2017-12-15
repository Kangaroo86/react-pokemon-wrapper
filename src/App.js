import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';

import CreateDeckContainer from './redux/containers/CreateDeckContainer';
import BattlePageContainer from './redux/containers/BattlePageContainer';
import UpdateDeckPageContainer from './redux/containers/UpdateDeckPageContainer';
import IndexContainer from './redux/containers/IndexContainer';
import HomeContainer from './redux/containers/HomeContainer';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} socket={this.props.socket}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={IndexContainer} //ok
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
                path="/decks/:deckId/update"
                component={UpdateDeckPageContainer}
                history={history}
              />
              <Route
                exact
                path="/createdeck"
                component={CreateDeckContainer} //ok
                history={history}
              />
              <Route
                exact
                path="/decks/:deckId/battle"
                component={BattlePageContainer} //pending
                history={history}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
