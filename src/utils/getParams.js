const getParams = (search) => {
  const pObject = {};
  search.replace("?", "").split("&").forEach(p => {
    pObject[p.split("=")[0]] = p.split("=")[1];
  });
  return pObject;
}

export {getParams};