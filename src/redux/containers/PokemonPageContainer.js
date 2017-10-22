import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import IndexPage from '../../components/IndexPage';
import getPokemonObjProcess from '../thunks/getPokemonObjProcess';
import getDefaultPokemonProcess from '../thunks/getDefaultPokemonProcess';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj,
    pokemonArray: state.pokemonArray,
    defaultPokemonArray: state.defaultPokemonArray
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPokemonObj: pokemonId => {
      dispatch(getPokemonObjProcess(pokemonId));
    },
    get_default_pokemon: () => dispatch(getDefaultPokemonProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_default_pokemon().then(result => {
      result.map(column => this.props.onPokemonObj(column.pokemonId));
    });
  }
});

// const withlifecycle = lifecycle({
//   componentDidMount() {
//     this.props.get_default_pokemon();
//   }
// });

export default compose(connectToStore, withlifecycle)(IndexPage);
