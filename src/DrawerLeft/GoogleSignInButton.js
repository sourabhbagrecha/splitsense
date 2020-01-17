import React from 'react';
import './GoogleSignInButton.css';
import Axios from 'axios';
import { serverUrl } from '../constants';

function GoogleSignInButton(props) {
  const { user, signOut, signInWithGoogle } = props;
  const signIn = async (e) => {
    const response = await signInWithGoogle(e);
    const {profile, isNewUser} = response.additionalUserInfo;
    const googleId = response.user.providerData[0].uid
    const responseId = await Axios.post(`${serverUrl}/helper/find-by-googleid`, {googleId});
    const {id} = responseId.data;
    window.localStorage.setItem("user", JSON.stringify({profile, isNewUser, googleId, serverId: id}))
    return isNewUser ? Axios.post(`${serverUrl}/user/new`, {profile, isNewUser}) : null
  };
  const signOutHandler = async (e) => {
    window.localStorage.setItem("user", "");
    signOut();
  }
  return (
    <div onClick={user ? signOutHandler : signIn} className='g-sign-in-button'>
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
