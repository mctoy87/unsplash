// описываем все экшены
export const PHOTO_REQUEST = 'PHOTO_REQUEST';
export const PHOTO_REQUEST_SUCCESS = 'PHOTO_REQUEST_SUCCESS';
export const PHOTO_REQUEST_ERROR = 'PHOTO_REQUEST_ERROR';
export const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';
export const SET_PAGE = 'SET_PAGE';

// создадим action creator`s
export const photoRequest = () => ({
  type: PHOTO_REQUEST,
});

export const photoRequestSuccess = (photoList) => ({
  type: PHOTO_REQUEST_SUCCESS,
  photoList,
});

export const photoRequestError = (error) => ({
  type: PHOTO_REQUEST_ERROR,
  error,
});


// для удобства создадим генератор's экшенов
export const updatePhotoList = photoList => ({
  type: UPDATE_PHOTOLIST,
  photoList,
});

export const setPage = currentPage => ({
  type: SET_PAGE,
  currentPage,
});

