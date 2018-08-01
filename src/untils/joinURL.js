const joinURL = (obj = {}) => {
  let newStringURL = "";
  for (var prop in obj) {
    newStringURL = `${newStringURL}${prop}=${obj[prop].join()}&`;
  }

  return newStringURL.length > 0 ? `?${newStringURL.slice(0, -1)}` : "";
};

export default joinURL;
