import {useEffect, useState} from 'react';
import {
  URL_API_TOKEN,
  CLIENT_ID,
  REDIRECT_URI,
  GRANT_TYPE,
  SECRET_KEY,
} from '../api/const';

export const useToken = (state) => {
  // задаем стейт для токена и кода
  const [code, setCode] = useState(state);
  const [token, setToken] = useState('');

  useEffect(() => {
    // если в параметрах строки есть 'code'
    if (location.search.includes('code')) {
      // то достаем его из параметров
      const code = new URLSearchParams(location.search).get('code');
      // и кладем в state
      setCode(code);
    }
    // если в хранилище памяти есть токен
    if (localStorage.getItem('Bearer')) {
      // то кладем его в стейт
      setToken(localStorage.getItem('Bearer'));
    }
    // эффект вызовется только 1 раз
  }, []);

  useEffect(() => {
    // если 'code' нет, то выходим
    if (!code) return;
    // если есть, то формируем строку с параметрами для запроса токена
    const searchParams = new URLSearchParams();
    searchParams.append('client_id', CLIENT_ID);
    searchParams.append('client_secret', SECRET_KEY);
    searchParams.append('redirect_uri', REDIRECT_URI);
    searchParams.append('code', code);
    searchParams.append('grant_type', GRANT_TYPE);
    // объединем строку
    const urlToken = `${URL_API_TOKEN}?${searchParams.toString()}`;
    // через запрос к серверу получаем токен
    fetch(`${urlToken}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        // кладем токен в стейт
        setToken(data.access_token);
      });
    // эффект срабатывает каждый раз при изменений code
  }, [code]);

  useEffect(() => {
    // если токен есть в стейте
    if (token) {
      // кладем его в хранилище
      localStorage.setItem('Bearer', token);
    }
    // эффект срабатывает каждый раз при изменений token
  }, [token]);

  const delToken = () => {
    setToken(localStorage.removeItem('Bearer'));
    localStorage.removeItem('Bearer');
  };

  return [token, delToken];
};
