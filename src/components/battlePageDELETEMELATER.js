{
  this.props.pokemonArray &&
    this.props.pokemonArray.map(pokemonObj => {
      return (
        <Card
          color="red"
          name={pokemonObj.name}
          characterId={pokemonObj.characterId}
          id={pokemonObj.id}
          moves={pokemonObj.moves.slice(0, 2).map(result => result.move.name)}
          stats={pokemonObj.stats.map(result => {
            let newState = {};
            newState.base_stat = result.base_stat;
            newState.name = result.stat.name;
            return newState;
          })}
          types={pokemonObj.types.map(result => result.type.name)}
          image={pokemonObj.sprites.front_default}
          onClick={this.handle_selectedPokemon}
        />
      );
    });
}
