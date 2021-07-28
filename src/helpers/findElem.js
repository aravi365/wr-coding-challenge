export const findElems = (params, query) => {
  let {name, email} = params;
  if (
    name.toLowerCase().includes(query) ||
    email.toLowerCase().includes(query)
  ) {
    return true;
  }
  return false;
};
