import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import BattlePage from '../../components/BattlePage';

import clearCurrentStatesProcess from '../thunks/clearCurrentStatesProcess';
import deleteBattleStateProcess from '../thunks/deleteBattleStateProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
//import getAllMessagesProcess from '../thunks/getAllMessagesProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getBattleStateProcess from '../thunks/getBattleStateProcess';
import socketProcess from '../thunks/socketProcess';
import setBattleStateProcess from '../thunks/setBattleStateProcess';
import listenForUpdatesProcess from '../thunks/listenForUpdatesProcess';
//import listenForMessageUpdateProcess from '../thunks/listenForMessageUpdateProcess';
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
    socket: state.socket,
    setBattleState: state.setBattleState
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    clear_currentStates_Process: () => dispatch(clearCurrentStatesProcess()),
    delete_Battle_state: battleId => {
      return dispatch(deleteBattleStateProcess(battleId)); //when a user logouts, the battleState will be deleted
    },
    get_userDecks: () => dispatch(getUserDecksProcess()),
    get_battleState: socket => dispatch(getBattleStateProcess(socket)),
    //get_All_Messages: () => dispatch(getAllMessagesProcess()), //get all msg from the B/E. dont need it? GET_ALL_MESSAGES taken care of it
    init_socket: () => dispatch(socketProcess()),
    listen_for_updates: () => dispatch(listenForUpdatesProcess()),
    // listen_For_Message_Update: messageObj => {
    //   return dispatch(listenForMessageUpdateProcess(messageObj)); //to send message to the B/E.not used in production
    // },
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    set_battleState: stateObj => dispatch(setBattleStateProcess(stateObj)),
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
    //this.props.init_socket();

    //this.props.get_All_Messages(); //do we need to call it?
  }
});

export default compose(connectToStore, withlifecycle)(BattlePage);
