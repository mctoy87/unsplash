// for authRequestAsync
import {URL_API} from '../../api/const';
import {deleteToken, updateToken} from '../token/tokenActions';
import axios from 'axios';
// for codeRequestAsync
import {
  URL_API_TOKEN,
  CLIENT_ID,
  REDIRECT_URI,
  GRANT_TYPE,
  SECRET_KEY,
} from '../../api/const';

import {authRequest, authRequestError, authRequestSuccess} from './actions';

// async action
export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  console.log('token в authRequestAsync: ', token);
  console.log('!token: ', !token);
  if (!token) return;
  dispatch(authRequest());
  console.log('Прошел запрос в authRequestAsync: ');
  axios(`${URL_API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data: {name, profile_image: profileImg}}) => {
      const img = profileImg.small.replace(/\?.*$/, '');
      const data = {name, img};
      dispatch(authRequestSuccess(data));
    })
    .catch(err => {
      console.log('err: ', err);
      dispatch(deleteToken);
      dispatch(authRequestError(err.toString()));
    });
};

// authActions.js
export const codeRequestAsync = () => (dispatch, getState) => {
  const code = getState().tokenReducer.code;
  if (code) {
    // формирование запроса для получения токена
    const searchParams = new URLSearchParams();
    searchParams.append('client_id', CLIENT_ID);
    searchParams.append('client_secret', SECRET_KEY);
    searchParams.append('redirect_uri', REDIRECT_URI);
    searchParams.append('code', code);
    searchParams.append('grant_type', GRANT_TYPE);
    const urlToken = `${URL_API_TOKEN}?${searchParams.toString()}`;
    dispatch({type: 'TOKEN_REQEST'});

    axios(urlToken, {method: 'POST'})
      .then(({data}) => {
        console.log('FETCHdata: ', data);
        // Устанавливаем токен в стор
        dispatch(updateToken(data.access_token));
        localStorage.setItem('Bearer', data.access_token);
        dispatch({type: 'TOKEN_REQEST_SUCCESS'});
      })
      .catch(err => {
        console.log('err: ', err);
        dispatch({type: 'TOKEN_REQEST_ERROR'});
      });
  }
};
