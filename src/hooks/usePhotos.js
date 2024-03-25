import {useEffect, useState} from 'react';
import {URL_API, CLIENT_ID} from '../api/const';

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/photos`, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
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
      .then(photoData => {
        console.log('data: ', photoData);
        setPhotos(photoData);
        // photoData.map(({created_at, id, likes, urls, user}) => {
        // });
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, []);

  return [photos];
};
