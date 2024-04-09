import Header from './components/Header';
import {Main} from './components/Main/Main';


import {AuthContextProvider} from './context/authContext';
import {PhotoListContextProvider} from './context/photoListContext';
import {updateToken} from './store';
import {useDispatch} from 'react-redux';
import {getToken} from './api/token';


const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <AuthContextProvider>
      <PhotoListContextProvider>
        <Header></Header>
        <Main/>
      </PhotoListContextProvider>
    </AuthContextProvider>
  );
};


export default App;
