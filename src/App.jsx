import Header from './components/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {LikeContextProvider} from './context/likeContext';
import {PhotoListContextProvider} from './context/photoListContext';
import {TokenContextProvider} from './context/tokenContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PhotoListContextProvider>
          <LikeContextProvider>
            <Header></Header>
            <Main/>
          </LikeContextProvider>
        </PhotoListContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
