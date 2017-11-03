import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Header, Image } from 'semantic-ui-react';
import pokeball2 from '../images/pokeball2.png';
import ReactAudioPlayer from 'react-audio-player';
import pokego from '../images/pokego.png';

export default class SignInComponent extends Component {
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

  handle_signin = (event, data) => {
    event.preventDefault();
    // const $target = event.target;
    // const userName = $target.userId.value.trim();
    // const email = $target.emailId.value.trim();
    // const password = $target.passwordId.value.trim();
    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    this.props.get_user({ name: name, email: email, password: password });
    this.props.history.push(`/`);
  };

  // handle_test = (event, data) => {
  //   //const find = data.value.trim();
  //   //console.log('found it---', data.target.value);
  //   this.setState({ password: event.target.userId.value });
  // };

  render() {
    console.log('props passed in: ----', this.props);
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
              <Image src={pokeball2} /> Log-in to your account
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
                  icon="mail outline"
                  id="emailId"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handle_selectedEmail}
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
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
