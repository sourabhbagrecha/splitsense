const userLocal = JSON.parse(window.localStorage.getItem("user"));
const {idToken} = userLocal;
export const authHeader = {headers: { Authorization: JSON.stringify({idToken})} };