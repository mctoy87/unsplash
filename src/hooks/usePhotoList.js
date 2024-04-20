import {useEffect, useState} from 'react';
import {URL_API, CLIENT_ID} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {
  photoRequest,
  photoRequestError,
  photoRequestSuccess,
  setPage,
} from '../store/photos/photoActions';

export const usePhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const page = useSelector(state => state.photoListReducer.currentPage);
  const loading = useSelector(state => state.photoListReducer.loading);
  console.log('page: ', page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photoRequest());
    fetch(`${URL_API}/photos?${page ? `page=${page}` : ''}`, {
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
        dispatch(photoRequestSuccess(photoData));
        dispatch(setPage(page));
        setPhotos(photoData);
        // photoData.map(({created_at, id, likes, urls, user}) => {
        // });
      })
      .catch(err => {
        dispatch(photoRequestError());
        console.log('err: ', err);
      });
  }, []);

  return [photos, loading];
};
