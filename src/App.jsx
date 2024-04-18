import Header from './components/Header';
import {Main} from './components/Main/Main';

import {PhotoListContextProvider} from './context/photoListContext';
import {getToken} from './api/token';


const App = () => {
  getToken();

  return (
    <PhotoListContextProvider>
      <Header></Header>
      <Main/>
    </PhotoListContextProvider>
  );
};


export default App;
