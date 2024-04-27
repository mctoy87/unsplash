// filtered photo for uniq
export const getUniqPhoto = (data, state) => {
  const res = data.filter(obj => !state.some(obj2 => obj.id === obj2.id));
  return res;
};
