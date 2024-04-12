import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  authLogout,
  authRequestAsync,
} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  // получим ИЗ КОНТЕКСТА токен
  const token = useSelector((state) => state.tokenReducer.token);
  console.log('token: ', token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  // очищает данные авторизованного пользователя по необходимости
  const clearAuth = () => dispatch(authLogout());

  return [auth, clearAuth];
};


