import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Header, Image } from 'semantic-ui-react';
import pokeball2 from '../images/pokeball2.png';
import ReactAudioPlayer from 'react-audio-player';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handle_selectedName = data => {
    this.setState(this.setState({ name: data.target.value }));
  };

  handle_selectedEmail = data => {
    this.setState(this.setState({ email: data.target.value }));
  };

  handle_selectedPassword = data => {
    this.setState(this.setState({ password: data.target.value }));
  };

  validate = (name, email, password) => {
    let isError = false;
    const errors = {
      errorName: '',
      errorEmail: '',
      errorPassword: ''
    };

    if (name === '') {
      isError = true;
      errors.errorName = 'Name could not be blank';
    }
    if (email === '') {
      isError = true;
      errors.errorEmail = 'Email could not be blank';
    }
    if (password === '') {
      isError = true;
      errors.errorPassword = 'Password could not be blank';
    }
    return isError ? errors : true;
  };

  handle_signup = (event, data) => {
    event.preventDefault();
    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    const error = this.validate(name, email, password);

    if (error !== true) {
      this.setState(error);
      return;
    } else {
      this.props.user_signup({ name: name, email: email, password: password });
      this.props.history.push(`/`);
    }

    // if (!this.state.email || !this.state.name || !this.state.password) {
    //   this.props.history.push(`/signup`);
    // } else {
    //   this.props.user_signup({ name: name, email: email, password: password });
    //   this.props.history.push(`/`);
    // }
  };

  render() {
    console.log('props passed in: ----', this.props.users);
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
              <Image src={pokeball2} /> Set-Up your account
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
                  icon="mail outline"
                  id="emailId"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handle_selectedEmail}
                />
                {this.state.errorEmail !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorEmail}
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
                      {this.state.errorPassword}
                    </p>
                  : null}
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handle_signup}>
                  Sign-up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
