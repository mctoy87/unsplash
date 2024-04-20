import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
  modalPhotoRequestAsync,
} from '../store/modalPhoto/modalPhotoActions';

export const usePhoto = (id) => {
  // данные фотографии, полученной с id
  const data = useSelector(state => state.modalPhotoReducer.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modalPhotoRequestAsync(id));
  }, []);
  return [data];
};


