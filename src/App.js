import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';

import IndexPage from './components/IndexPage';
import PokemonPageContainer from './redux/containers/PokemonPageContainer';
import RenderAllDecksPageContainer from './redux/containers/RenderAllDecksPageContainer';
import BattlePageContainer from './redux/containers/BattlePageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={PokemonPageContainer} />
              <Route
                exact
                path="/decks/battle"
                component={BattlePageContainer}
              />
              <Route
                exact
                path="/decks/render"
                component={RenderAllDecksPageContainer}
              />
              <Route
                exact
                path="/decks/:deckId"
                render={props => <IndexPage {...props} />}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
