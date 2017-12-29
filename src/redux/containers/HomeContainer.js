import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import deleteDecksProcess from '../thunks/deleteDecksProcess';
import updateDecksProcess from '../thunks/updateDecksProcess';
import socketProcess from '../thunks/socketProcess';
import createBattleProcess from '../thunks/createBattleProcess'; //wip
import requestBattleProcess from '../thunks/requestBattleProcess';
//import { USER_CONNECTED } from '../serverChat/Events';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks,
    userSignIn: state.userSignIn,
    socket: state.socket,
    createBattleObj: state.createBattleObj
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    get_userDecks: () => dispatch(getUserDecksProcess()),
    delete_decks: deckId => {
      dispatch(deleteDecksProcess(deckId));
    },
    update_Decks: (id, deckName, pokemonIds) => {
      dispatch(updateDecksProcess(id, deckName, pokemonIds));
    },
    signOut: () => dispatch({ type: 'USER_SIGNIN', userSignIn: null }),
    init_socket: () => dispatch(socketProcess()),
    create_Battle: () => dispatch(createBattleProcess()),
    request_Battle: userId => dispatch(requestBattleProcess(userId)) //do i need ot hardcord userid to process?
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.get_userDecks();
    this.props.init_socket();
  }
  // componentDidCatch(error, info) {
  //   console.log('error--------', error);
  //   console.log('info--------', info);
  // }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
