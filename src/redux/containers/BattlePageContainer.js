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

import createMessageProcess from '../thunks/createMessageProcess';
import createRoomProcess from '../thunks/createRoomProcess';

//import { socket } from '../../components/BattlePageComponent';
import { socket } from '../../socket.io/socketManager';

function mapStateToProps(state, ownProps) {
  return {
    createBattleObj: state.createBattleObj,
    defaultPokemonArray: state.defaultPokemonArray,
    getBattleState: state.getBattleState,
    messages: state.messages,
    pokemonArray: state.pokemonArray,
    userSignIn: state.userSignIn,
    userDecks: state.userDecks,
    setBattleState: state.setBattleState //no used in producton delete?
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    clear_rootReducer: () => dispatch(clearRootReducerProcess()),
    create_message: messageObj => dispatch(createMessageProcess(messageObj)),
    create_room: battleId => dispatch(createRoomProcess(battleId)),
    delete_battleState: battleId => {
      return dispatch(deleteBattleStateProcess(battleId)); //when a user logouts, the battleState will be deleted
    },
    get_userDecks: () => dispatch(getUserDecksProcess()),
    //get_battleState: socket => dispatch(getBattleStateProcess(socket)),
    get_battleState: () => dispatch(getBattleStateProcess()),
    listen_for_updates: () => dispatch(listenForUpdatesProcess()),
    onPokemonObj: pokemonId => dispatch(getPokemonObjProcess(pokemonId)),
    set_battleState: stateObj => {
      return dispatch(setBattleStateProcess(stateObj));
    },
    signOut: () => dispatch({ type: 'USER_SIGNIN', userSignIn: null }),
    update_messages: () => dispatch(updateMessagesProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks().then(() => {
      this.props.get_battleState();
      //this.props.listen_for_updates();
    });

    //this.props.update_messages();

    //this.props.listen_for_updates();
  }
});

export default compose(connectToStore, withlifecycle)(BattlePage);
