import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import IndexPage from '../../components/IndexPage';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getDefaultPokemonProcess from '../thunks/getDefaultPokemonProcess';
import createDecksProcess from '../thunks/createDecksProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getUsersProcess from '../thunks/getUsersProcess';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks,
    users: state.users,
    userSignIn: state.userSignIn
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    get_default_pokemon: () => dispatch(getDefaultPokemonProcess()),
    create_decks: (deckName, pokemonIds, id) => {
      dispatch(createDecksProcess(deckName, pokemonIds, id));
    },
    get_user_decks: () => dispatch(getUserDecksProcess()),
    get_user: () => dispatch(getUsersProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_default_pokemon().then(result => {
      result.map(column => this.props.onPokemonObj(column.pokemonId));
    });
    this.props.get_user_decks();
    this.props.get_user();
  }
});

export default compose(connectToStore, withlifecycle)(IndexPage);
