const changeQueryObject = (obj, group, id) => {
  let newObj = { ...obj };
  if (!newObj.hasOwnProperty(group)) {
    newObj = { ...newObj, [group]: [id] };
  } else {
    const indexID = obj[group].indexOf(id);
    if (indexID === -1) {
      newObj[group] = [...newObj[group], id];
    } else {
      newObj[group] = newObj[group].filter(item => item !== id);
      if (newObj[group].length === 0) {
        delete newObj[group];
      }
    }
  }
  return newObj;
};

export default changeQueryObject;
