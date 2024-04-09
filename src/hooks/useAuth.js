import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {URL_API} from '../api/const';
import {deleteToken} from '../store';

export const useAuth = () => {
  // здесь храним данные авторизованного пользователя
  const [auth, setAuth] = useState({});
  // получим ИЗ КОНТЕКСТА токен
  const token = useSelector((state) => state.token);
  console.log('token: ', token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 401) {
          throw new Error(response.status);
        }
      })
      .then(({name, profile_image: profileImg}) => {
        const img = profileImg.small.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log('err: ', err);
        dispatch(deleteToken);
        setAuth({});
      });
  }, [token]);

  // очищает данные авторизованного пользователя по необходимости
  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};


