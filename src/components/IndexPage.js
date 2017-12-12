import React from 'react';
import IndexComponent from './IndexComponent';

export default function SignInPage({
  signIn_user,
  userSignIn,
  errorMessage,
  history,
  userSignup,
  user_signup,
  users,
  socket
}) {
  return (
    <div>
      <IndexComponent
        signIn_user={signIn_user}
        history={history}
        userSignIn={userSignIn}
        errorMessage={errorMessage}
        userSignup={userSignup}
        user_signup={user_signup}
        users={users}
        socket={socket}
      />
    </div>
  );
}
