// for authRequestAsync
import {URL_API} from '../../api/const';
import {deleteToken} from '../../store/token/tokenActions';
import axios from 'axios';

// описываем все экшены
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// создадим action creator`s
export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

// async action
export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(authRequest());

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
