// tokenActions.js
export const SET_AUTH_CODE = 'SET_AUTH_CODE';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

// для удобства создадим генератор's экшенов
export const setAuthCode = (code) => ({
  type: SET_AUTH_CODE,
  code,
});
export const updateToken = (token) => ({
  type: 'UPDATE_TOKEN',
  token,
});
export const deleteToken = () => ({
  type: 'DELETE_TOKEN',
});
