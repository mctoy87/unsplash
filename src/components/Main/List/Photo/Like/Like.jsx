import style from './Like.module.css';
import {ReactComponent as LikeIcon} from './img/like.svg';
import PropTypes from 'prop-types';
import {useLike} from '../../../../../hooks/useLike';
import {useContext} from 'react';
import {likeContext} from '../../../../../context/likeContext';

export const Like = ({likes, id}) => {
  // поставил ли пользователь лайк
  const {isLiked, setIsLiked} = useContext(likeContext);
  console.log('isLiked: ', isLiked);
  // кол-во лайков с пользователем
  const [newLikes] = useLike(id, isLiked);
  console.log('newLikes: ', newLikes);

  const toggleLike = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
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
