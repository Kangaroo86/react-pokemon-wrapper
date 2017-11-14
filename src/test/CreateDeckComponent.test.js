import React from 'react';
import { shallow } from 'enzyme';
import CreateDeckComponent from '../components/CreateDeckComponent';

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

  it('Render pokemonArray', () => {
    const wrapper = shallow(
      <CreateDeckComponent pokemonArray={pokemonArray} />
    );
    expect(wrapper.find('#character.id')).toBe(
      pokemonArray.map(character => character.id)
    );
  });
});
