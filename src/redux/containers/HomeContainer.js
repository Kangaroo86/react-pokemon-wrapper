import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import deleteDecksProcess from '../thunks/deleteDecksProcess';
import updateDecksProcess from '../thunks/updateDecksProcess';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks,
    userSignIn: state.userSignIn
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
    signOut: () => dispatch({ type: 'USER_SIGNIN', userSignIn: null })
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.get_userDecks();
  },
  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps-------', prevProps);
    // console.log('prevState-------', prevState);
    //this.props.get_userDecks();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
