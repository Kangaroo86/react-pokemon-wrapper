import React from 'react';
import SignUpComponent from './SignUpComponent';

export default function SignUpPage({ userSignup, get_user }) {
  return (
    <div>
      <SignUpComponent userSignup={userSignup} get_user={get_user} />
    </div>
  );
}
