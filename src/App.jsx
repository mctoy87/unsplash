import Header from './components/Header';
import {Main} from './components/Main/Main';
import {getToken} from './api/token';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  getToken();

  return (
    <Routes>
      <Route path='*' element= {
        <>
          <Header></Header>
          <Main/>
        </>
      }
      />
    </Routes>
  );
};

export default App;
