import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
  likeRequestAsync,
} from '../store/like/likeActions';


export const useLikeData = () => {
  const token = useSelector((state) => state.tokenReducer.token);
  //  сделал ли пользователь Лайк
  const [isLiked, setIsLiked] = useState(null);
  // кол-во лайков вместе с лайком пользователя
  const [newLikes, setNewLikes] = useState(0);
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleLikeClick = (id) => {
    if (!token) return;
    setId(id);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    dispatch(likeRequestAsync(id, isLiked, setNewLikes));
  }, [isLiked]);

  return [newLikes, handleLikeClick];
};


