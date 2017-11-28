import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({
  signIn_user,
  users,
  userSignIn,
  errorUserSignIn,
  history
}) {
  console.log('SignInPage errorUserSignIn-------', errorUserSignIn);
  return (
    <div>
      <SignInComponent
        signIn_user={signIn_user}
        users={users}
        history={history}
        userSignIn={userSignIn}
        errorUserSignIn={errorUserSignIn}
      />
    </div>
  );
}
