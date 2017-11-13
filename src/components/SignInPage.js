import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({
  signIn_user,
  users,
  userSignIn,
  history
}) {
  console.log('SignInPage userSignIn=', userSignIn);
  return (
    <div>
      <SignInComponent
        signIn_user={signIn_user}
        users={users}
        history={history}
        userSignIn={userSignIn}
      />
    </div>
  );
}
