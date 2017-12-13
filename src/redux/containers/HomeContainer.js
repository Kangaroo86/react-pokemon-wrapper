import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import deleteDecksProcess from '../thunks/deleteDecksProcess';
import updateDecksProcess from '../thunks/updateDecksProcess';
import socketProcess from '../thunks/socketProcess';
//import { USER_CONNECTED } from '../serverChat/Events';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks,
    userSignIn: state.userSignIn,
    socket: state.socket
    //connectedPlayers: state.connectedPlayers
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
    init_socket: () => dispatch(socketProcess())
    // add_userToStore: () => {
    //   const { socket } = this.props;
    //   socket.on(USER_CONNECTED, data => {
    //     dispatch({ type: 'CONNECTED_PLAYERS', connectedPlayers: data });
    //   });
    // }
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.get_userDecks();
    this.props.init_socket();
    //this.props.add_userToStore();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
