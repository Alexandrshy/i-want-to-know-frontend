const parseQueryString = queryString => {
  if (queryString.length === 0) return {};
  let params = {};
  let temp = [];
  let cleanString =
    queryString.charAt(0) === "?"
      ? queryString.substring(1, queryString.length)
      : queryString;
  let groupURL = cleanString.split("&");

  for (var i = 0; i < groupURL.length; i++) {
    temp = groupURL[i].split("=");
    params[temp[0]] = temp[1].split(",");
  }

  return params;
};

export default parseQueryString;
