import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useLikeData = (id) => {
  const {token} = useContext(tokenContext);
  //  сделал ли пользователь Лайк
  const [isLiked, setIsLiked] = useState(null);
  // кол-во лайков вместе с лайком пользователя
  const [newLikes, setNewLikes] = useState(0);
  console.log('newLikes: ', newLikes);

  useEffect(() => {
    if (!token || (isLiked === null)) return;
    console.log(`Запрос данных фото id=${id} c токеном`);

    fetch(`${URL_API}/photos/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 401) {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        console.log('photoData: ', data);
        setNewLikes(data.likes);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, [id]);

  const handleLikeClick = () => {
    if (!token) return;
    console.log('Ставми Like или Unlike');

    if (isLiked) {
      console.log(`ADD Like id=${id}`);
      fetch(`${URL_API}/photos/${id}/like`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 401) {
            throw new Error(response.status);
          }
        })
        .then(({photo}) => {
          console.log('photo: ', photo);
          setNewLikes(photo.likes);
        })
        .catch(err => {
          console.log('err: ', err);
        });
    } else {
      console.log(`DELETE id=${id}`);
      fetch(`${URL_API}/photos/${id}/like`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 401) {
            throw new Error(response.status);
          }
        })
        .then((data) => {
          console.log('data: ', data);
          setNewLikes(data.photo.likes);
        })
        .catch(err => {
          console.log('err: ', err);
        });
    }
    setIsLiked(!isLiked);
  };

  console.log('isLiked: ', isLiked);
  return [newLikes, isLiked, handleLikeClick];
};


