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
