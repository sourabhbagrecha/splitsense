import { serverUrl } from "./constants";
import Axios from "axios";

export const handleGoogleSignIn = async (e, signInWithGoogle, setUserLocal) => {
  try {
    const response = await signInWithGoogle(e);
    const {idToken} = response.credential;
    const {profile, isNewUser} = response.additionalUserInfo;
    setUserLocal({idToken});
    if(isNewUser){
      await Axios.post(`${serverUrl}/user/new`, {profile, isNewUser})
    }
    const checkAuth = await Axios.get(`${serverUrl}/helper/check-auth`, {headers: { Authorization: JSON.stringify({idToken}) }});
    setUserLocal({idToken});
    window.localStorage.setItem("userId", checkAuth.data.userId);
    window.localStorage.setItem("email", checkAuth.data.email);
  } catch (error) {
    console.log(error);
  }
};