import Header from './components/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {PhotoContextProvider} from './context/photoContext';
import {TokenContextProvider} from './context/tokenContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PhotoContextProvider>
          <Header></Header>
          <Main/>
        </PhotoContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
