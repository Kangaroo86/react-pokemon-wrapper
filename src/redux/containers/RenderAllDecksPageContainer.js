import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import RenderAllDecksPage from '../../components/RenderAllDecksPage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import deleteDecksProcess from '../thunks/deleteDecksProcess';
import updateDecksProcess from '../thunks/updateDecksProcess';

function mapStateToProps(state, ownProps) {
  //console.log('render state.userDecks containerXXXXX-----', state.userDecks);
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
    delete_decks: id => {
      dispatch(deleteDecksProcess(id));
    },
    update_Decks: id => {
      dispatch(updateDecksProcess(id));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks();
  }
});

export default compose(connectToStore, withlifecycle)(RenderAllDecksPage);
