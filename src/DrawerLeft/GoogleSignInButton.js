import React from 'react';
import './GoogleSignInButton.css';
import Axios from 'axios';
import { serverUrl } from '../constants';

function GoogleSignInButton(props) {
  const { user, signOut, signInWithGoogle, setUserLocal } = props;
  const signIn = async (e) => {
    try {
      const response = await signInWithGoogle(e);
      const {idToken} = response.credential;
      const {profile, isNewUser} = response.additionalUserInfo;
      setUserLocal({idToken});
      if(isNewUser){
        console.log(await Axios.post(`${serverUrl}/user/new`, {profile, isNewUser}))
      }
      const checkAuth = await Axios.get(`${serverUrl}/helper/check-auth`, {headers: { Authorization: JSON.stringify({idToken}) }});
      setUserLocal({idToken, userId: checkAuth.data.userId});
      console.log("CheckAuth:::>>", checkAuth.data);
      window.localStorage.setItem("email", checkAuth.data.email);
    } catch (error) {
      console.log(error);
    }
  };
  const signOutHandler = async (e) => {
    setUserLocal("");
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
