import React, {useState} from 'react';
import style from './Auth.module.css';
import login from './img/login.svg';
import {urlAuth} from '../../../api/auth';

// *экспериментирую с REDUX*
// получаю хук стор
import {useDispatch} from 'react-redux';
// получаю генератор экшенов
import {deleteToken} from '../../../store/token/tokenActions';
import {useAuth} from '../../../hooks/useAuth';
import {setToken} from '../../../api/token';
import AuthLoader from '../../../UI/AuthLoader';


export const Auth = () => {
  // получаем данные авторизованного пользователя или удаляем их ИЗ КОНТЕКСТА
  const [auth, loading, clearAuth] = useAuth();
  // флаг откр/закр кнопку выхода
  const [isShowLogout, setIsShowLogout] = useState(false);
  // получаю диспетчер чтобы менять стор Redux
  const dispatch = useDispatch();

  const getOut = () => {
    setIsShowLogout(!isShowLogout);
  };
  // удалить токен и очистить данные пользователя при выходе
  const logOut = () => {
    console.log('удалить токен');
    setToken('');
    dispatch(deleteToken()); // Удаляем токен из стора и localStorage
    clearAuth();
  };


  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader/>
      ) : auth.name ? (
        <>
          <button
            className={style.button}
            // меняем флаг на открыть/закрыть кнопку выхода
            onClick={getOut}
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
