import style from './Avatar.module.css';
// import avatar from './img/shakespeare.png';
import PropTypes from 'prop-types';

export const Avatar = ({author}) => (
  <a className={style.linkAvatar} href={author.links.self}>
    <img
      className={style.avatar}
      src={author.profile_image.medium}
      alt='Аватар автора фотографии'
    />
    <p className={style.avatarName}>{author.username}</p>
  </a>
);

Avatar.propTypes = {
  author: PropTypes.object,
};
