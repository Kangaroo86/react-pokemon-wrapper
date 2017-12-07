import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({
  signIn_user,
  userSignIn,
  errorMessage,
  history
}) {
  return (
    <div>
      <SignInComponent
        signIn_user={signIn_user}
        history={history}
        userSignIn={userSignIn}
        errorMessage={errorMessage}
      />
    </div>
  );
}
