import React from 'react';
import './GoogleSignInButton.css';
import Axios from 'axios';
import { serverUrl } from '../constants';

function GoogleSignInButton(props) {
  const { user, signOut, signInWithGoogle } = props;
  const signIn = (e) => {
    signInWithGoogle(e)
    .then(response => {
      const {profile, isNewUser} = response.additionalUserInfo;
      return isNewUser ? Axios.post(`${serverUrl}/user/new`, {profile, isNewUser}) : null;
    })
    .then(_ => {
      console.log("Connected");
      return true;
    })
    .catch(console.log)
  }
  return (
    <div onClick={user ? signOut : signIn} className='g-sign-in-button'>
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
