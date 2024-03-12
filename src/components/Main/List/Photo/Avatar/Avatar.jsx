import style from './Avatar.module.css';
import avatar from './img/shakespeare.png';
import PropTypes from 'prop-types';

export const Avatar = ({author}) => (
  <a className={style.linkAvatar} href='#author'>
    <img
      className={style.avatar}
      src={avatar}
      alt='Аватар автора фотографии'
    />
    <p className={style.avatarName}>{author}</p>
  </a>
);

Avatar.propTypes = {
  author: PropTypes.string,
};
