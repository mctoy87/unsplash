import Header from './components/Header';
import {Main} from './components/Main/Main';


import {PhotoListContextProvider} from './context/photoListContext';
import {updateToken} from './store/token/tokenActions';
import {useDispatch} from 'react-redux';
import {getToken} from './api/token';


const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <PhotoListContextProvider>
      <Header></Header>
      <Main/>
    </PhotoListContextProvider>
  );
};


export default App;
