import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';


import {photoListReducer} from './photos/photoListReducer';
import {authReducer} from './auth/authReducer';
import {tokenReducer} from './token/tokenReducer';


const rootReducer = combineReducers({
  tokenReducer,
  photoListReducer,
  authReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
