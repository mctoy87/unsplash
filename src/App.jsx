import Header from './components/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <Header></Header>
        <Main/>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
