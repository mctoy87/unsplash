import style from './Like.module.css';
import {ReactComponent as LikeIcon} from './img/like.svg';
import PropTypes from 'prop-types';
import {useLikeData} from '../../../../../hooks/useLikeData';

export const Like = ({likes, id}) => {
  // кол-во лайков с пользователем, лайкнул ли, был ли 1ый запрос
  const [newLikes, handleLikeClick] = useLikeData();

  return (
    <div className={style.like}>
      <button
        className={style.linkLike}
        type='button'
        aria-label='Лайкнуть фото'
        onClick={() => handleLikeClick(id)}
      >
        <LikeIcon/>
        {/* Если запрос к серверу на добавление лайка пользователя прошел то */}
        {/* показываем новый лайк */}
        {newLikes ? (<p className={style.likeCounter}>{newLikes}</p>) : (
          <p className={style.likeCounter}>{likes}</p>
        )}
      </button>
    </div>
  );
};

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.string,
};
