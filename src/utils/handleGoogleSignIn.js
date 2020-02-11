import { serverUrl } from "./constants";
import Axios from "axios";

export const handleGoogleSignIn = async (e, signInWithGoogle, setUserLocal) => {
  try {
    const response = await signInWithGoogle(e);
    const {idToken} = response.credential;
    const {profile} = response.additionalUserInfo;
    const serverRes = await Axios.post(`${serverUrl}/auth/google/login`, {profile, idToken})
    window.localStorage.setItem('user', JSON.stringify({token: serverRes.data.token}));
    window.localStorage.setItem('userId', serverRes.data.userId)
  } catch (error) {
    console.log(error);
  }
};