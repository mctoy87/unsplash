import {useEffect, useState} from 'react';
import {
  URL_API_TOKEN,
  CLIENT_ID,
  REDIRECT_URI,
  GRANT_TYPE,
  SECRET_KEY,
} from '../api/const';

export const useToken = (state) => {
  const [code, setCode] = useState(state);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (location.search.includes('code')) {
      const code = new URLSearchParams(location.search).get('code');
      setCode(code);
    }

    if (localStorage.getItem('Bearer')) {
      setToken(localStorage.getItem('Bearer'));
    }
  }, []);

  useEffect(() => {
    if (!code) return;

    const searchParams = new URLSearchParams();
    searchParams.append('client_id', CLIENT_ID);
    searchParams.append('client_secret', SECRET_KEY);
    searchParams.append('redirect_uri', REDIRECT_URI);
    searchParams.append('code', code);
    searchParams.append('grant_type', GRANT_TYPE);

    const urlToken = `${URL_API_TOKEN}?${searchParams.toString()}`;

    fetch(`${urlToken}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.access_token);
      });
  }, [code]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('Bearer', token);
    }
  }, [token]);

  const delToken = () => {
    setToken(localStorage.removeItem('Bearer'));
    localStorage.removeItem('Bearer');
  };

  return [token, delToken];
};
