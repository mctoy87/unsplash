// import {applyMiddleware} from 'redux';
// export const store = createStore()
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';


import {setToken} from '../api/token';

import {
  DELETE_TOKEN,
  UPDATE_TOKEN,
} from './token/tokenActions';

import {photoListReducer} from './photos/photoListReducer';
import {authReducer} from './auth/authReducer';
import {tokenReducer} from './token/tokenReducer';


// *### Шаг 2: Выполнение POST запроса и получение токена*
// Теперь когда у нас есть `code` в нашем Redux store,
// можем создать thunk, который будет выполнять POST запрос на получение токена

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
