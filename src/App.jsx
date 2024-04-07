import Header from './components/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {PhotoListContextProvider} from './context/photoListContext';
import {TokenContextProvider} from './context/tokenContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PhotoListContextProvider>
          <Header></Header>
          <Main/>
        </PhotoListContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
