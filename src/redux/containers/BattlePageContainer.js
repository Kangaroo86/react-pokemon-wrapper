import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import BattlePage from '../../components/BattlePage';

import createBattleProcess from '../thunks/createBattleProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getBattleStateProcess from '../thunks/getBattleStateProcess';
import setBattleStateProcess from '../thunks/setBattleStateProcess';
import listenForUpdatesProcess from '../thunks/listenForUpdatesProcess';
import listenForMessageUpdateProcess from '../thunks/listenForMessageUpdateProcess';

function mapStateToProps(state, ownProps) {
  return {
    createBattleObj: state.createBattleObj,
    defaultPokemonArray: state.defaultPokemonArray,
    getBattleState: state.getBattleState,
    receiveTextMessages: state.receiveTextMessages,
    pokemonArray: state.pokemonArray,
    userSignIn: state.userSignIn,
    userDecks: state.userDecks,
    setBattleState: state.setBattleState
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    create_Battle: userId => dispatch(createBattleProcess(userId)),
    get_userDecks: () => dispatch(getUserDecksProcess()),
    get_BattleState: () => dispatch(getBattleStateProcess()),
    listen_For_Updates: () => dispatch(listenForUpdatesProcess()),
    listen_For_Message_Update: messageObj => {
      return dispatch(listenForMessageUpdateProcess(messageObj));
    },
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    set_BattleState: stateObj => dispatch(setBattleStateProcess(stateObj)),
    signOut: () => dispatch({ type: 'USER_SIGNIN', userSignIn: null })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks().then(() => {
      this.props.get_BattleState();
    });
  }
});

export default compose(connectToStore, withlifecycle)(BattlePage);
