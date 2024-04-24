import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';


import {photoListReducer} from './photos/photoListReducer';
import {authReducer} from './auth/authReducer';
import {tokenReducer} from './token/tokenReducer';
import {likeReducer} from './like/likeReducer';


const rootReducer = combineReducers({
  tokenReducer,
  photoListReducer,
  authReducer,
  likeReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
