import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {photoListRequestAsync} from '../store/photos/photoActions';

export const usePhotoList = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const photos = useSelector(state => state.photoListReducer.photoList);
  const loading = useSelector(state => state.photoListReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Start async request get PHOTOLIST');
    dispatch(photoListRequestAsync());
  }, [token]);

  return [photos, loading];
};
