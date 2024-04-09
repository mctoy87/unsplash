export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};
export const getToken = () => {
  const token = localStorage.getItem('bearer') || '';

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};
