import {useEffect} from 'react';
import Header from './components/Header';
import {Main} from './components/Main/Main';
import {
  URL_API,
  CLIENT_ID,
  REDIRECT_URI,
  GRANT_TYPE,
  SECRET_KEY,
} from './api/const';
import {useToken} from './hooks/useToken';


function App() {
  const [token] = useToken('');
  console.log('token: ', token);

  const searchParams = new URLSearchParams();
  searchParams.append('client_id', CLIENT_ID);
  searchParams.append('client_secret', SECRET_KEY);
  searchParams.append('redirect_uri', REDIRECT_URI);
  searchParams.append('code', token);
  searchParams.append('grant_type', GRANT_TYPE);

  const urlToken = `${URL_API}?${searchParams.toString()}`;

  useEffect(() => {
    if (!token) return;
    fetch(`${urlToken}`, {
      method: 'POST',
      // body: searchParams,
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // body: JSON.stringify({
      //   client_id: {CLIENT_ID},
      //   client_secret: 'yDOgFZ_CtGksbUhx0ZoW6lsKrZ1ZhLeUaAH2O9Eyc3s',
      //   redirect_uri: {REDIRECT_URI},
      //   code: {token},
      //   grant_type: 'authorization_code',
      // }),
    })
      .then(response => console.log('response: ', response));
  }, [token]);

  return (
    <>
      <Header token={token}></Header>
      <Main/>
    </>
  );
}

export default App;
