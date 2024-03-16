import {useState, useEffect} from 'react';
import Header from './components/Header';
import {Main} from './components/Main/Main';
import {URL_API} from './api/const';
import {CLIENT_ID} from './api/const';
import {REDIRECT_URI} from './api/const';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch(`${URL_API}`, {
      method: 'POST',
      body: JSON.stringify({
        client_id: {CLIENT_ID},
        client_secret: 'yDOgFZ_CtGksbUhx0ZoW6lsKrZ1ZhLeUaAH2O9Eyc3s',
        redirect_uri: {REDIRECT_URI},
        code: {code},
        grant_type: 'authorization_code',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  return (
    <>
      <Header token={token}></Header>
      <Main/>
    </>
  );
}

export default App;
