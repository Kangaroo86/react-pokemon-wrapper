import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Image,
  Icon,
  Progress,
  Segment,
  List,
  Label,
  Grid
} from 'semantic-ui-react';
import jenny from '../images/jenny.jpg';

export default class RenderAllDecksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemon: [],
      selectedDeckName: '',
      selectedDeckId: []
    };
  }

  handle_deleteDecks = data => {
    //console.log('clicked', data.target.id);
    this.props.delete_decks(data.target.id);
  };

  onChange_selectedPokemon = data => {
    this.setState({ selectedPokemon: data.target.value });
  };

  onChange_selectedDeckName = data => {
    this.setState({ selectedDeckName: data.target.value });
  };

  onChange_selectedDeckId = data => {
    this.setState({ selectedDeckId: data.target.id });
  };

  handle_updateDecks = (data, id, deckName, pokemonIds) => {
    let $target = data.target;
    //let deck_id = $target.deckId.id;
    //let deck_name = $target.deckName.value;
    //console.log('deck_id---', deck_id);
    console.log('deck_name---', $target);
    //let poke_name = $target.
    //this.props.update_Decks(deck_id, deck_name, deck_id);
  };

  render() {
    return (
      <div>
        {/* {console.log('User deck obj-------:', this.props.userDecks)} */}
        <Grid columns={3} divided>
          <Grid.Row stretched>
            {this.props.userDecks.map((deck, i) => {
              console.log('this deck is: ', deck);
              let numWin = parseInt(
                Math.round(deck.wins / (deck.wins + deck.losses) * 100)
              );
              let numLose = parseInt(
                Math.round(deck.losses / (deck.wins + deck.losses) * 100)
              );
              return (
                <Grid.Column>
                  <Card.Group>
                    <Card id={deck.id} name="deckId">
                      <Icon
                        id={deck.id}
                        floated="left"
                        name="delete"
                        onClick={this.handle_deleteDecks}
                      />
                      <Card.Content>
                        <Image floated="right" size="mini" src={jenny} />
                        <Card.Header name="deckName" value={deck.name}>
                          {deck.name}
                        </Card.Header>
                        <Card.Meta>User Name</Card.Meta>
                        <List size="massive" horizontal>
                          {deck.cards.map(character => {
                            return (
                              <Label size="small" image>
                                <Image src={character.sprites.front_default} />
                                {character.name}
                              </Label>
                            );
                          })}
                        </List>
                      </Card.Content>
                      <Card.Content extra>
                        <Button basic color="green">
                          Ready
                        </Button>
                        {/* <Link to="/"> */}
                        <Button
                          basic
                          color="red"
                          onClick={this.handle_updateDecks}>
                          Edit
                        </Button>
                        {/* </Link> */}
                      </Card.Content>
                      <Segment inverted>
                        <Progress
                          percent={numWin ? numWin : 0}
                          inverted
                          progress
                          success>
                          WINS
                        </Progress>
                        <Progress
                          percent={numLose ? numLose : 0}
                          inverted
                          progress
                          warning>
                          LOSSES
                        </Progress>
                      </Segment>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
