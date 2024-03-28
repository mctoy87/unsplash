import style from './Like.module.css';
import {ReactComponent as LikeIcon} from './img/like.svg';
import PropTypes from 'prop-types';
import {useLike} from '../../../../../hooks/useLike';
import {useState} from 'react';

export const Like = ({likes, id}) => {
  // нужно добавить или удалить лайк?
  const [addlLike, setAddLike] = useState(null);
  // кол-во лайков с пользователем, лайкнул ли, был ли 1ый запрос
  const [isLiked, newLikes, isFirstRequest] = useLike(id, addlLike);

  const toggleLike = () => {
    !addlLike ? setAddLike(true) : setAddLike(false);
    console.log('isLiked: ', isLiked);
  };

  return (
    <div className={style.like}>
      <button
        className={style.linkLike}
        type='button'
        aria-label='Лайкнуть фото'
        onClick={() => toggleLike()}
      >
        <LikeIcon/>
        {/* Если запрос к серверу на добавление лайка пользователя прошел то */}
        {/* показываем новый лайк */}
        {isFirstRequest ? (<p className={style.likeCounter}>{newLikes}</p>) : (
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
