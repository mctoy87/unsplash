// import {applyMiddleware} from 'redux';
// export const store = createStore()
import {createStore, applyMiddleware} from 'redux';
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

const initialState = {
  photoList: 'Здесь будут твои фоточки',
  token: '',
  code: '',
};

// *экспериментирую с REDUX*
// вынесу в константу тип экшена
const SET_AUTH_CODE = 'SET_AUTH_CODE';
const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

// для удобства создадим генератор's экшенов
export const setAuthCode = (code) => ({
  type: SET_AUTH_CODE,
  code,
});
export const updatePhotoList = photoList => ({
  type: UPDATE_PHOTOLIST,
  photoList,
});
export const updateToken = (token) => ({
  type: 'UPDATE_TOKEN',
  token,
});
export const deleteToken = () => ({
  type: 'DELETE_TOKEN',
});

export const fetchToken = (code) => (dispatch) => {
  if (code) {
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

const rootReducer = (state = initialState, action) => {
  // *экспериментирую с REDUX*
  // отлавливаем тип экшена
  switch (action.type) {
    case SET_AUTH_CODE:
      return {
        ...state,
        code: action.code,
      };
    case UPDATE_PHOTOLIST:
      return {
        ...state,
        photoList: action.photoList,
      };
    case UPDATE_TOKEN:
      console.log('action.token: ', action.token);
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    // по дефолту возвращаем старый стейт
    default:
      return state;
  }
};


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
console.log('store: ', store);
