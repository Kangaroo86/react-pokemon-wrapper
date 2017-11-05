import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Header, Image } from 'semantic-ui-react';
import pokeball2 from '../images/pokeball2.png';
import ReactAudioPlayer from 'react-audio-player';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
    };
  }

  handle_selectedName = data => {
    this.setState(this.setState({ name: data.target.value }));
  };

  handle_selectedPassword = data => {
    this.setState(this.setState({ password: data.target.value }));
  };

  handle_signin = (event, data) => {
    event.preventDefault();
    const name = this.state.name.trim();
    const password = this.state.password.trim();

    this.props.signIn_user({ name, password, userId: 1 });
    this.props.history.push(`/`);
  };

  render() {
    console.log('this state name: ----', this.state.name);
    console.log('this state password: ----', this.state.password);
    return (
      <div className="login-form">
        <ReactAudioPlayer
          src="http://files.simey.me/pokonami/pallet.mp3"
          autoPlay
          loop="true"
        />
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={pokeball2} /> Sign-In to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  id="userId"
                  iconPosition="left"
                  placeholder="Name"
                  onChange={this.handle_selectedName}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  id="passwordId"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handle_selectedPassword}
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handle_signin}>
                  Sign-In
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
