import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  authLogout,
} from '../store/auth/actions';
import {authRequestAsync, codeRequestAsync} from '../store/auth/asyncActions';
import {setAuthCode} from '../store/token/tokenActions';

export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  // получим ИЗ КОНТЕКСТА токен
  const token = useSelector((state) => state.tokenReducer.token);
  const loading = useSelector(state => state.authReducer.loading);
  const dispatch = useDispatch();

  const code = useSelector((state) => state.tokenReducer.code);

  // получать `code` и отправлять его в стор Redux
  useEffect(() => {
    if (code) return;
    // если в параметрах строки есть 'code'
    if (location.search.includes('code')) {
      // то достаем его из параметров
      const code = new URLSearchParams(location.search).get('code');
      // Сохраняем полученный code в store
      dispatch(setAuthCode(code));
    }
  }, []);

  // Вызовем thunk (получения токена) для Redux
  useEffect(() => {
    if (token) return;
    if (code) {
      dispatch(codeRequestAsync(code));
    }
  }, [code]);

  // вызываем async action получения токена
  useEffect(() => {
    console.log('вызван async request из useAuth');
    dispatch(authRequestAsync());
  }, [token]);

  // очищает данные авторизованного пользователя по необходимости
  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};


