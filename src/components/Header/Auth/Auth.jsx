import React, {useState, useEffect} from 'react';
import style from './Auth.module.css';
import login from './img/login.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';

// *экспериментирую с REDUX*
// получаю хук стор
import {useSelector, useDispatch} from 'react-redux';
// получаю генератор экшенов
import {fetchToken} from '../../../store';
import {deleteToken, setAuthCode} from '../../../store/token/tokenActions';
import {useAuth} from '../../../hooks/useAuth';
import {updatePhotoList} from '../../../store/photoListReducer';


export const Auth = () => {
  // получаем данные авторизованного пользователя или удаляем их ИЗ КОНТЕКСТА
  const [auth, clearAuth] = useAuth();
  // флаг откр/закр кнопку выхода
  const [isShowLogout, setIsShowLogout] = useState(false);

  // *экспериментирую с REDUX*
  // достаю значение из стора Redux
  const value = useSelector(state => state.photoListReducer.photoList);
  console.log('value: ', value);
  // получаю диспетчер чтобы менять стор Redux
  const dispatch = useDispatch();
  const code = useSelector((state) => state.tokenReducer.code);
  console.log('code: ', code);

  // получать `code` и отправлять его в стор Redux
  useEffect(() => {
    // если в параметрах строки есть 'code'
    if (location.search.includes('code')) {
      // то достаем его из параметров
      const code = new URLSearchParams(location.search).get('code');
      console.log('code: ', code);
      // Сохраняем полученный code в store
      dispatch(setAuthCode(code));
    }
    // const urlParams = new URLSearchParams(window.location.search);
    // const code = urlParams.get('code');
    // if (code) {
    //   dispatch(setAuthCode(code));
    //   // dispatch(fetchToken(code));
    // }
  }, [dispatch]);

  // Вызовем thunk (получения токена) для Redux
  useEffect(() => {
    if (code) {
      dispatch(fetchToken(code));
    }
  }, [code, dispatch]);

  const getOut = () => {
    setIsShowLogout(!isShowLogout);
    // *экспериментирую с REDUX*
    // меняю стор Redux передавая action через dispatch
    dispatch(updatePhotoList(isShowLogout));
  };
  // удалить токен и очистить данные пользователя при выходе
  const logOut = () => {
    dispatch(deleteToken()); // Удаляем токен из стора и localStorage
    clearAuth();
  };


  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button
            className={style.button}
            // меняем флаг на открыть/закрыть кнопку выхода
            onClick={() => setIsShowLogout(getOut)}
          >
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`АВАТАР ${auth.name}`}
            />
            <span className={style.name}>{auth.name}</span>
          </button>
          {isShowLogout && (
            <button
              className={style.logout}
              color='white'
              onClick={logOut}
            >
              Выйти
            </button>
          )}
        </>
      ) : (
      <a href={urlAuth}>
        <img className={style.svg} src={login} alt='Авторизация'></img>
      </a>
    )}

    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func
};
