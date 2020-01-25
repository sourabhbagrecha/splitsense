const userLocal = JSON.parse(window.localStorage.getItem("user"));
export const {userId} = userLocal;

export const getName = (user, name) => {
  return user.toString() === userId.toString() ? "You" : name;
}