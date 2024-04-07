import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePhoto = (id) => {
  const {token} = useContext(tokenContext);
  // кол-во лайков вместе с лайком пользователя
  // const [newLikes, setNewLikes] = useState(null);
  // данные фотографии, полученной с id
  const [data, setData] = useState({});

  useEffect(() => {
    if (!token) return;
    console.log('Запрос фото c токеном для модалки');

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
        setData(data);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, []);
  return [data, setData];
};


