import React, { Component } from 'react';
//import ReactAudioPlayer from 'react-audio-player';

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
      selectedDeckId: [],
      redirect: false
    };
  }

  handle_deleteDecks = data => {
    let deckId = data.target.id;
    let userId = localStorage.getItem('userId');

    this.props.delete_decks(userId, deckId);
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

  // refreshPage = () => {
  //   window.parent.location = window.parent.location.href;
  // };

  handle_updateDecks = (event, data, deckName, pokemonIds) => {
    this.props.history.push(`/decks/${data.value.id}/update`);
    this.setState({ redirect: true }); //current this is not doing anything
  };

  render() {
    //console.log('these  are the props,>>>>>>>>>>>>>>>>>', this.props);
    return (
      <div>
        {/* {this.refreshPage()} */}
        <Grid columns={3} divided>
          <Grid.Row stretched>
            {this.props.userDecks.map((deck, i) => {
              //console.log('this deck obj: ', deck);
              let numWin = parseInt(
                Math.round(deck.wins / (deck.wins + deck.losses) * 100),
                10
              );
              let numLose = parseInt(
                Math.round(deck.losses / (deck.wins + deck.losses) * 100),
                10
              );
              return (
                <Grid.Column key={i}>
                  <Card.Group>
                    <Card id={deck.id} name="deckId">
                      <Icon
                        id={deck.id}
                        // floated="left"
                        name="delete"
                        onClick={this.handle_deleteDecks}
                      />
                      <Card.Content>
                        <Image floated="right" size="mini" src={jenny} />
                        <Card.Header name="deckName" value={deck.name}>
                          {deck.deckname}
                        </Card.Header>
                        {/* <Card.Meta>User Name</Card.Meta> */}
                        <List size="massive" horizontal>
                          {deck.cards.map((character, i) => {
                            return (
                              <Label size="small" key={i} image>
                                <Image src={character.sprites.front_default} />
                                {character.name}
                              </Label>
                            );
                          })}
                        </List>
                      </Card.Content>
                      <Card.Content extra>
                        <Button basic color="green">
                          READY
                        </Button>
                        <Button
                          value={deck}
                          basic
                          color="red"
                          onClick={this.handle_updateDecks}>
                          EDIT
                        </Button>
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
