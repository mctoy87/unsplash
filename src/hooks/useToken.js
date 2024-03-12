import {useEffect, useState} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);
  console.log('token: ', token);

  useEffect(() => {
    if (location.pathname.includes('/code')) {
      const token = new URLSearchParams(location.search);
      console.log('token: ', token);
      setToken(token);
    }
  }, []);

  return [token];
};
