import Header from './components/Header';
import {Main} from './components/Main/Main';

import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {PhotoListContextProvider} from './context/photoListContext';
import {TokenContextProvider} from './context/tokenContext';
import {store} from './store';


const App = () => (
  <Provider store={store}>
    <TokenContextProvider>
      <AuthContextProvider>
        <PhotoListContextProvider>
          <Header></Header>
          <Main/>
        </PhotoListContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  </Provider>
);


export default App;
