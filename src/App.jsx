import Header from './components/Header';
import {Main} from './components/Main/Main';
import {getToken} from './api/token';

const App = () => {
  getToken();

  return (
    <>
      <Header></Header>
      <Main/>
    </>
  );
};

export default App;
