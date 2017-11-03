import React from 'react';
import SignUpComponent from './SignUpComponent';

export default function SignUpPage({ userLogin, get_user }) {
  return (
    <div>
      <SignUpComponent userLogin={userLogin} get_user={get_user} />
    </div>
  );
}
