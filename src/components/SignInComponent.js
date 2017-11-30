import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Header, Image } from 'semantic-ui-react';
import pokeball2 from '../images/pokeball2.png';
import ReactAudioPlayer from 'react-audio-player';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      errorName: '',
      signInAccepted: false
    };
  }

  handle_selectedName = data => {
    this.setState({ name: data.target.value });
  };

  handle_selectedPassword = data => {
    this.setState({ password: data.target.value });
  };

  validate = (name, password) => {
    let isThereError = false;

    let errors = {
      errorName: '',
      errorPassword: ''
    };

    if (name === '') {
      isThereError = true;
      errors.errorName = 'Please enter your name';
    }

    if (password === '') {
      isThereError = true;
      errors.errorPassword = 'Password entered is blank';
    }

    return isThereError ? errors : true;
  };

  handle_signin = (event, data) => {
    event.preventDefault();
    const name = this.state.name.trim();
    const password = this.state.password.trim();

    let errorPass = this.validate(name, password);

    if (errorPass !== true) {
      this.setState(errorPass);
    } else {
      this.props.history.push(`/decks/render`);
      this.props.signIn_user({ name, password });
    }
  };

  render() {
    return (
      <div className="login-form">
        {/* <ReactAudioPlayer
          src="http://files.simey.me/pokonami/pallet.mp3"
          autoPlay
          loop="true"
        /> */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          padded
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
                {this.state.errorName !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorName}
                    </p>
                  : null}

                <Form.Input
                  fluid
                  icon="lock"
                  id="passwordId"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handle_selectedPassword}
                />
                {this.state.errorPassword !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorName}
                    </p>
                  : null}
                {this.props.errorUserSignIn === 'Invalid request'
                  ? <p style={{ color: 'Red' }}>
                      {'Invalid password'}
                    </p>
                  : null}
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
