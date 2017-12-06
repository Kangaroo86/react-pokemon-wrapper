import React from 'react';
import IndexComponent from './IndexComponent';

export default function SignInPage({
  signIn_user,
  userSignIn,
  errorMessage,
  history
}) {
  return (
    <div>
      <IndexComponent
        signIn_user={signIn_user}
        history={history}
        userSignIn={userSignIn}
        errorMessage={errorMessage}
      />
    </div>
  );
}
