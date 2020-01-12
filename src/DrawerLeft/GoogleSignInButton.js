import React from 'react';
import './GoogleSignInButton.css';

function GoogleSignInButton(props) {
  const { user, signOut, signInWithGoogle } = props;
  console.log(user);
  return (
    <div onClick={user ? signOut : signInWithGoogle} className='g-sign-in-button'>
      <div className='content-wrapper'>
        <div className='logo-wrapper'>  
          <img src={user ? 'https://lh3.googleusercontent.com/a-/AAuE7mDLLumXJIHQQg-rxxAmEvpoH70pUOxVbF5_N2mtQA' : 'https://developers.google.com/identity/images/g-logo.png'} alt='google sign in' />
        </div>  
        <span className='text-container'> 
          {
            user
              ? " Sign Out"
              : "Sign In With Google"
          }
        </span>
      </div>  
  </div>
  )
}


export default GoogleSignInButton;
