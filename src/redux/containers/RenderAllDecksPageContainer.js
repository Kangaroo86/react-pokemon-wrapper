import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RenderAllDecksPage from '../../components/RenderAllDecksPage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import deleteDecksProcess from '../thunks/deleteDecksProcess';
import updateDecksProcess from '../thunks/updateDecksProcess';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    get_userDecks: () => dispatch(getUserDecksProcess()),
    delete_decks: (userId, deckId) => {
      dispatch(deleteDecksProcess(userId, deckId));
    },
    update_Decks: (id, deckName, pokemonIds) => {
      dispatch(updateDecksProcess(id, deckName, pokemonIds));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps); //include withRouter to link to updatePage

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks();
  }
  // componentDidUpdate(prevProps, prevState) {
  //   this.props.get_userDecks();
  // }
});

export default compose(connectToStore, withlifecycle)(
  withRouter(RenderAllDecksPage)
);
