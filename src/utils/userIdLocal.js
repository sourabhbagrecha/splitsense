const userId = window.localStorage.getItem("userId");
export {userId};

export const getName = (user, name) => {
  return user.toString() === userId.toString() ? "You" : name;
}