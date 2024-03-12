import style from './Like.module.css';
import {ReactComponent as LikeIcon} from './img/like.svg';
import PropTypes from 'prop-types';

export const Like = ({likes}) => (
  <div className={style.like}>
    <button
      className={style.linkLike}
      type='button'
      aria-label='Лайкнуть фото'
    >
      <LikeIcon/>
      <p className={style.likeCounter}>{likes}</p>
    </button>
  </div>
);

Like.propTypes = {
  likes: PropTypes.number,
};
