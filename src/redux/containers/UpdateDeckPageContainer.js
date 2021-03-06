import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateDeckPage from '../../components/UpdateDeckPage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import deleteDecksProcess from '../thunks/deleteDecksProcess';
import updateDecksProcess from '../thunks/updateDecksProcess';
import getDefaultPokemonProcess from '../thunks/getDefaultPokemonProcess';

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
    get_default_pokemon: () => dispatch(getDefaultPokemonProcess()),
    delete_decks: id => {
      dispatch(deleteDecksProcess(id));
    },
    update_Decks: (id, deckName, pokemonIds) => {
      dispatch(updateDecksProcess(id, deckName, pokemonIds));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_userDecks();
    this.props.get_default_pokemon().then(result => {
      result.map(column => this.props.onPokemonObj(column.pokemonId));
    });
  }
});

export default compose(connectToStore, withlifecycle)(
  withRouter(UpdateDeckPage)
);
