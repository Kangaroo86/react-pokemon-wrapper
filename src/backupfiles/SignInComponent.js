import React, { Component } from 'react';
import {
  Divider,
  Button,
  Form,
  Segment,
  Grid,
  Header,
  Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import pokeball2 from '../images/pokeball2.png';
//import ReactAudioPlayer from 'react-audio-player';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      errorName: ''
    };
  }

  handle_selectedName = data => {
    this.setState({ name: data.target.value });
  };

  handle_selectedPassword = data => {
    this.setState({ password: data.target.value });
  };

  //Validating user's userName & password
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

    if (this.props.errorMessage !== null) {
      isThereError = true;
      errors.errorPassword = this.props.errorMessage;
    }

    return isThereError ? errors : false;
  };

  handle_signin = (event, data) => {
    event.preventDefault();
    const name = this.state.name.trim();
    const password = this.state.password.trim();

    this.props.signIn_user({ name, password });
    let errorPass = this.validate(name, password);

    console.log('errorPass----', errorPass);
    if (errorPass !== false) {
      this.setState(errorPass);
    } else {
      this.props.history.push(`/decks/render`);
    }
  };

  render() {
    //console.log('what are my props from signin Comp------', this.props);
    console.log(
      'signIn component errorMessage*****-----',
      this.props.errorMessage
    );
    //console.log('this.props.userSignIn--------', this.props.userSignIn);
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
                  placeholder="username"
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
                  placeholder="password"
                  type="password"
                  onChange={this.handle_selectedPassword}
                />
                {this.state.errorPassword !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorPassword}
                    </p>
                  : null}

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handle_signin}>
                  Sign-In
                </Button>
                <Divider horizontal>Or</Divider>
                <Link to="/signup">
                  <Button color="black" fluid size="large">
                    Sign-Up
                  </Button>
                </Link>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}