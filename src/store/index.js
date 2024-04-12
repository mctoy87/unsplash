// import {applyMiddleware} from 'redux';
// export const store = createStore()
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import {
  URL_API_TOKEN,
  CLIENT_ID,
  REDIRECT_URI,
  GRANT_TYPE,
  SECRET_KEY,
} from '../api/const';

import {setToken} from '../api/token';

import {
  DELETE_TOKEN,
  UPDATE_TOKEN,
  updateToken
} from './token/tokenActions';

import {photoListReducer} from './photoListReducer';
import {authReducer} from './auth/authReducer';
import {tokenReducer} from './token/tokenReducer';


// *### Шаг 2: Выполнение POST запроса и получение токена*
// Теперь когда у нас есть `code` в нашем Redux store,
// можем создать thunk, который будет выполнять POST запрос на получение токена

// authActions.js
export const fetchToken = (code) => (dispatch) => {
  if (code) {
    // формирование запроса для получения токена
    const searchParams = new URLSearchParams();
    searchParams.append('client_id', CLIENT_ID);
    searchParams.append('client_secret', SECRET_KEY);
    searchParams.append('redirect_uri', REDIRECT_URI);
    searchParams.append('code', code);
    searchParams.append('grant_type', GRANT_TYPE);
    const urlToken = `${URL_API_TOKEN}?${searchParams.toString()}`;

    fetch(urlToken, {method: 'POST'})
      .then((response) => response.json())
      .then((data) => {
        console.log('FETCHdata: ', data);
        // Устанавливаем токен в стор
        dispatch(updateToken(data.access_token));
        localStorage.setItem('Bearer', data.access_token);
      });
  }
};

// мидлварь для редьюсера токена
export const tokenMiddleware = (store) => (next) => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};

const rootReducer = combineReducers({
  tokenReducer,
  photoListReducer,
  authReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
console.log('store: ', store);
