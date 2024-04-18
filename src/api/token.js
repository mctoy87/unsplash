import {useDispatch} from 'react-redux';
import {tokenRequestSuccess} from '../store/token/tokenActions';

export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};

export const getToken = () => {
  const token = localStorage.getItem('Bearer') || '';
  const dispatch = useDispatch();
  if (token) {
    dispatch(tokenRequestSuccess(token));
  }

  return token;
};
