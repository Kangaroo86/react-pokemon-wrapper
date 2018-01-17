import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import BattlePage from '../../components/BattlePage';

import clearRootReducerProcess from '../thunks/clearRootReducerProcess';
import deleteBattleStateProcess from '../thunks/deleteBattleStateProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getBattleStateProcess from '../thunks/getBattleStateProcess';
import setBattleStateProcess from '../thunks/setBattleStateProcess';
import listenForUpdatesProcess from '../thunks/listenForUpdatesProcess';
import updateMessagesProcess from '../thunks/updateMessagesProcess';

import { socket } from '../../components/BattlePageComponent';

function mapStateToProps(state, ownProps) {
  return {
    createBattleObj: state.createBattleObj,
    defaultPokemonArray: state.defaultPokemonArray,
    getBattleState: state.getBattleState,
    messages: state.messages,
    pokemonArray: state.pokemonArray,
    userSignIn: state.userSignIn,
    userDecks: state.userDecks,
    setBattleState: state.setBattleState
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    clear_rootReducer: () => dispatch(clearRootReducerProcess()),
    delete_battleState: battleId => {
      return dispatch(deleteBattleStateProcess(battleId)); //when a user logouts, the battleState will be deleted
    },
    get_userDecks: () => dispatch(getUserDecksProcess()),
    get_battleState: socket => dispatch(getBattleStateProcess(socket)),
    listen_for_updates: obj => dispatch(listenForUpdatesProcess(obj)),
    onPokemonObj: pokemonId => dispatch(getPokemonObjProcess(pokemonId)),
    set_battleState: (stateObj, battleId) => {
      return dispatch(setBattleStateProcess(stateObj, battleId));
    },
    signOut: () => dispatch({ type: 'USER_SIGNIN', userSignIn: null }),
    update_messages: messageObj => dispatch(updateMessagesProcess(messageObj))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks().then(() => {
      this.props.get_battleState(socket);
    });
    //this.props.listen_for_updates();
  }
});

export default compose(connectToStore, withlifecycle)(BattlePage);
