import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import RenderAllDecksPage from '../../components/RenderAllDecksPage';
import getDefaultPokemonProcess from '../thunks/getDefaultPokemonProcess';

function mapStateToProps(state, ownProps) {
  console.log('render page-----', state.defaultPokemonArray);
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_default_pokemon: () => dispatch(getDefaultPokemonProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, withlifecycle)(RenderAllDecksPage);
