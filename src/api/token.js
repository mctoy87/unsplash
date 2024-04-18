export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};

export const getToken = () => {
  const token = localStorage.getItem('Bearer') || '';

  return token;
};
