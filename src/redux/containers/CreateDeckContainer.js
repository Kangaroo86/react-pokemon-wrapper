import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import CreateDeckPage from '../../components/CreateDeckPage';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getDefaultPokemonProcess from '../thunks/getDefaultPokemonProcess';
import createDecksProcess from '../thunks/createDecksProcess';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getRegisteredUsersObjProcess from '../thunks/getRegisteredUsersObjProcess';

function mapStateToProps(state, ownProps) {
  return {
    //pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray,
    userDecks: state.userDecks,
    users: state.users,
    userSignIn: state.userSignIn
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPokemonObj: () => {
      dispatch(getPokemonObjProcess());
    },
    get_default_pokemon: () => dispatch(getDefaultPokemonProcess()),
    create_decks: (deckName, pokemonIds, id) => {
      dispatch(createDecksProcess(deckName, pokemonIds, id));
    },
    get_user_decks: () => dispatch(getUserDecksProcess()),
    get_user: () => dispatch(getRegisteredUsersObjProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.onPokemonObj();
    this.props.get_user_decks();
    this.props.get_user();
  }
});

export default compose(connectToStore, withlifecycle)(CreateDeckPage);
