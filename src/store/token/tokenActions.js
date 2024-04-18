// tokenActions.js
export const SET_AUTH_CODE = 'SET_AUTH_CODE';
export const DELETE_TOKEN = 'DELETE_TOKEN';

// описываем все экшены
export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';

// создадим action creator`s
export const tokenRequest = () => ({
  type: TOKEN_REQUEST,
});

export const tokenRequestSuccess = (token) => ({
  type: TOKEN_REQUEST_SUCCESS,
  token,
});

export const tokenRequestError = (error) => ({
  type: TOKEN_REQUEST_ERROR,
  error,
});

// для удобства создадим генератор's экшенов
export const setAuthCode = (code) => ({
  type: SET_AUTH_CODE,
  code,
});

export const deleteToken = () => ({
  type: 'DELETE_TOKEN',
});
