import style from './Auth.module.css';
import login from './img/login.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';

export const Auth = ({token}) => (
  <button className={style.button}>
    {token ? token : (
      <a href={urlAuth}>
        <img className={style.svg} src={login} alt='Авторизация'></img>
      </a>
    )}
  </button>
);

Auth.propTypes = {
  token: PropTypes.string,
};
