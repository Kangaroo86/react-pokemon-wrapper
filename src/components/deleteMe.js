<Grid columns={3} divided>
  <Grid.Row stretched>
    <Grid.Column>
      <Card.Group>
        <Card>
          <Icon floated="left" name="delete" />
          <Card.Content>
            <Image floated="right" size="mini" src={jenny} />
            <Card.Header>Deck Name</Card.Header>
            <Card.Meta>User Name</Card.Meta>
            <List size="massive" horizontal>
              <Label size="small" image>
                <Image src={eevee} />
                eevee
              </Label>
              <Label size="small" image>
                <Image src={eevee} />
                eevee
              </Label>
              <Label size="small" image>
                <Image src={eevee} />
                eevee
              </Label>
              <Label size="small" image>
                <Image src={eevee} />
                eevee
              </Label>
              <Label size="small" image>
                <Image src={eevee} />
                eevee
              </Label>
              <Label size="small" image>
                <Image src={eevee} />
                eevee
              </Label>
            </List>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Ready
              </Button>
              <Button basic color="red">
                Edit
              </Button>
            </div>
          </Card.Content>
          <Segment inverted>
            <Progress percent={75} inverted progress success>
              WINS
            </Progress>
            <Progress percent={25} inverted progress warning>
              LOSSES
            </Progress>
          </Segment>
        </Card>
        <Button primary onClick={this.handle_defaultPokemonArray}>
          Primary
        </Button>
        <Button secondary>Secondary</Button>
      </Card.Group>
    </Grid.Column>
  </Grid.Row>
</Grid>;

<p>
  {this.props.userDecks.map((decksObj, i) => {
    return decksObj.cards.map(pokemonObj => {
      console.log('pokeObj is this: ', pokemonObj);
      return (
        <img
          key={i}
          src={pokemonObj.sprites.front_default}
          alt={pokemonObj.name}
        />
      );
    });
  })}
</p>;

const default_list_of_Pokemon = [
  {
    id: 1,
    name: 'Bulbasaur'
  },
  {
    id: 4,
    name: 'Charmander'
  },
  {
    id: 7,
    name: 'Squirtle'
  },
  {
    id: 152,
    name: 'Chikorita'
  },
  {
    id: 155,
    name: 'Cyndaquil'
  },
  {
    id: 158,
    name: 'Totodile'
  },
  {
    id: 252,
    name: 'Treecko'
  },
  {
    id: 255,
    name: 'Torchic'
  },
  {
    id: 258,
    name: 'Mudkip'
  },
  {
    id: 150,
    name: 'Mewtwo'
  },
  {
    id: 151,
    name: 'Mew'
  },
  {
    id: 25,
    name: 'Pikachu'
  },
  {
    id: 144,
    name: 'Articuno'
  },
  {
    id: 145,
    name: 'Zapdo'
  },
  {
    id: 146,
    name: 'Moltres'
  },
  {
    id: 243,
    name: 'Raikou'
  },
  {
    id: 244,
    name: 'Entei'
  },
  {
    id: 245,
    name: 'Suicune'
  }
];

{
  this.props.userDecks.map((decksObj, i) => {
    //console.log('decksObj ++++++', decksObj);
    return decksObj.cards.map(pokemonObj => {
      //console.log('pokemonObj----', pokemonObj);
      return (
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Icon floated="left" name="delete" />
                  <Card.Content>
                    <Image floated="right" size="mini" src={jenny} />
                    <Card.Header>
                      {decksObj.name}
                    </Card.Header>
                    <Card.Meta>User Name</Card.Meta>
                    <List size="massive" horizontal>
                      <Label size="small" image>
                        <Image src={pokemonObj.sprites.front_default} />
                        {pokemonObj.name}
                      </Label>
                    </List>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Ready
                      </Button>
                      <Button basic color="red">
                        Edit
                      </Button>
                    </div>
                  </Card.Content>
                  <Segment inverted>
                    <Progress
                      percent={parseInt(
                        Math.round(
                          decksObj.wins /
                            (decksObj.wins + decksObj.losses) *
                            100
                        )
                      )}
                      inverted
                      progress
                      success>
                      WINS
                    </Progress>
                    <Progress
                      percent={parseInt(
                        Math.round(
                          decksObj.losses /
                            (decksObj.wins + decksObj.losses) *
                            100
                        )
                      )}
                      inverted
                      progress
                      warning>
                      LOSSES
                    </Progress>
                  </Segment>
                </Card>
                <Button primary onClick={this.handle_defaultPokemonArray}>
                  Primary
                </Button>
                <Button secondary>Secondary</Button>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    });
  });
}

function choose() {
  return arguments[Math.floor(Math.random() * arguments.length)];
}

$('<div id="black"/>').appendTo('body');

var tab = $('<table/>').appendTo('body');
for (var i = 0; i < 6; i++) {
  var tr = $('<tr/>').appendTo(tab);
  for (var j = 0; j < 6; j++) {
    $('<td/>').appendTo(tr);
  }
}

function pad(num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
}
