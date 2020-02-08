export const findVerb = (word) => {
  let reply = "";
  switch (word) {
    case "create": reply = "added";
    
    break;
    case "update": reply = "updated"
    
    break;
    case "delete": reply = "deleted"
    
    break;  
    default: reply = "added"
      break;
  }
  return reply;
}