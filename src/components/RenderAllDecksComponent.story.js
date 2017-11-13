import React from 'react';
import { storiesOf } from '@storybook/react';
import RenderAllDecksComponent from './RenderAllDecksComponent';

storiesOf('RenderAllDecksComponent', module).add('Edit Path', () =>
  <RenderAllDecksComponent userDecks={userDecks} />
);

const userDecks = [
  {
    id: 1,
    name: 'Starter Deck',
    wins: 5,
    losses: 5,
    cards: [
      {
        name: 'midkip',
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png'
        }
      }
    ]
  }
];

const pokemonObjData = [
  {
    id: 1,
    name: 'Bulbasaur'
  }
];
