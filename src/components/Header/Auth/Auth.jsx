import style from './Auth.module.css';
import login from './img/login.svg';
import PropTypes from 'prop-types';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth :
      <img className={style.svg} src={login} alt='Авторизация'></img>
    }
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
