import getBattleState from '../../api/getBattleState';
import setBattleState from '../../api/setBattleState';

export default function getBattleStateProcess() {
  return (dispatch, getState, socket) => {
    const scope = {};
    return getBattleState()
      .then(battleState => {
        const userDecks = getState().userDecks; //you can actually getState from the store this way. wtf?

        let processDeck = false;
        let playerCards = [];
        let playerNum = Number(localStorage.getItem('playerNum'));
        let deckId = Number(localStorage.getItem('deckSelected'));

        //initialize deck when battleState is undefine
        if (!battleState) {
          processDeck = true;
        } else {
          if (playerNum === 1) {
            if (!battleState.p1_initialized) {
              processDeck = true;
            }
          } else {
            if (!battleState.p2_initialized) {
              processDeck = true;
            }
          }
        }

        //initializing deck & parsing the data, then push it to playerCards
        if (processDeck) {
          const deck = userDecks.find(deck => deck.id === deckId);

          playerCards = deck.cards.map((pokeObj, i) => {
            let updatedStats = {};
            pokeObj.stats.forEach(statObj => {
              switch (statObj.stat.name) {
                case 'hp':
                  updatedStats.hp = statObj.base_stat;
                  updatedStats.total_hp = statObj.base_stat;
                  break;
                case 'special-defense':
                  updatedStats.spec_def = statObj.base_stat;
                  updatedStats.total_hp = statObj.base_stat;
                  break;
                case 'special-attack':
                  updatedStats.spec_atk = statObj.base_stat;
                  break;
                case 'defense':
                  updatedStats.def = statObj.base_stat;
                  break;
                case 'attack':
                  updatedStats.atk = statObj.base_stat;
                  break;
                case 'speed':
                  updatedStats.spd = statObj.base_stat;
                  break;
                default:
                  updatedStats = {};
              }
            });
            //future development. Add more stats to the list
            return {
              id: pokeObj.id,
              name: pokeObj.name,
              image: pokeObj.sprites.front_default,
              stats: updatedStats
            };
          });
        }

        //when battleState is undefine, set it to default
        if (!battleState) {
          battleState = {
            activeItem: '', //animation
            message: '', //socet io
            messages: [], //socket io
            userConnected: [],

            p1_animation: 'shake', //animation
            p1_duration: 500, //animation
            p1_visible: true, //animation
            p1_battle_zone: [],
            p1_deck_zone: [],
            p1_grave_yard: [],
            p1_turn: false,
            p1_initialized: false,

            p2_animation: 'shake',
            p2_duration: 500,
            p2_visible: true,
            p2_battle_zone: [],
            p2_deck_zone: [],
            p2_grave_yard: [],
            p2_turn: false,
            p2_initialized: false
          };
        }

        //initialize P1 & P2 deck to the default battleState above
        if (processDeck) {
          if (playerNum === 1) {
            battleState.p1_deck_zone = playerCards;
            battleState.p1_initialized = true;
            if (battleState.p2_initialized === true) {
              battleState.p1_turn = true;
            }
          } else {
            battleState.p2_deck_zone = playerCards;
            battleState.p2_initialized = true;
            if (battleState.p1_initialized === true) {
              battleState.p1_turn = true;
            }
          }
        }

        scope.battleState = battleState; //store battleState to reference later
        scope.processDeck = processDeck; //to reference processDeck is True
        return processDeck ? setBattleState(battleState) : {};
      })
      .then(() => {
        //Emiting to B/E that the state was updated
        if (scope.processDeck === true) {
          socket.emit('STATE_UPDATED');
        }
        const battleState = scope.battleState;
        //console.log('battleState From thunk after----', battleState);
        dispatch({ type: 'GET_BATTLE_STATE', getBattleState: battleState });
      });
  };
}
