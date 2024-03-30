import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useLike = (id, isLiked) => {
  console.log('isLiked: ', isLiked);
  const {token} = useContext(tokenContext);
  // кол-во лайков вместе с лайком пользователя
  const [newLikes, setNewLikes] = useState(null);
  // данные фотографии, полученной с id
  const [data, setData] = useState({});

  useEffect(() => {
    if (!token || (isLiked === null)) return;
    console.log('Searching Like');

    if (isLiked) {
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
          setData(photo);
          setNewLikes(photo.likes);
        })
        .catch(err => {
          console.log('err: ', err);
        });
    } else {
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
        })
        .catch(err => {
          console.log('err: ', err);
        });
    }
  }, [isLiked]);
  return [newLikes, data];
};


