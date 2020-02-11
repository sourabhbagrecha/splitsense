const userLocal = JSON.parse(window.localStorage.getItem("user"));
const {token} = userLocal || "";
export const authHeader = {headers: { Authorization: `Bearer ${token}`} };