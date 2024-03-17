import {useEffect, useState} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.search.includes('code')) {
      const locationSearch = new URLSearchParams(location.search).toString();
      console.log('locationSearch: ', locationSearch);
      const token = new URLSearchParams(location.search).get('code');
      setToken(token);
    }
  }, []);

  return [token];
};
