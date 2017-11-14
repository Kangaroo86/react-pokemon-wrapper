import React from 'react';
import { shallow } from 'enzyme';
import CreateDeckComponent from '../components/CreateDeckComponent';
import { Card, Grid } from 'semantic-ui-react';
import { expect } from 'chai';

describe('pokemonArray', () => {
  const pokemonArray = [
    {
      name: 'bulbasaur',
      id: 1,
      moves: [{ move: { name: 'razor-wind' } }],
      stats: [{ base_state: 45, stat: { name: 'speed' } }],
      types: [{ type: { name: 'poison' } }],
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
    }
  ];

  xit('checks for Card, Grid, Div exist & should Render PokemonArray', () => {
    const wrapper = shallow(
      <CreateDeckComponent pokemonArray={pokemonArray} />
    );
    //console.log('this is my wrapper-----', wrapper);
    pokemonArray.forEach(character => {
      // expect(wrapper.find(`#${character.id}`)).to.have.length(1);
      expect(
        wrapper.find({ id: character.id, name: character.name })
      ).to.have.length(1);
    });
    expect(wrapper.find(Card)).to.have.length(pokemonArray.length);
    expect(wrapper.find(Grid)).to.have.length(2);
    //expect(wrapper.contains(<div />)).to.equal(true);
  });
});
