// photoListActions.js
export const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';

// для удобства создадим генератор's экшенов
export const updatePhotoList = photoList => ({
  type: UPDATE_PHOTOLIST,
  photoList,
});
