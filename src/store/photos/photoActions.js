// описываем все экшены
export const PHOTO_REQUEST = 'PHOTO_REQUEST';
export const PHOTO_REQUEST_SUCCESS = 'PHOTO_REQUEST_SUCCESS';
export const PHOTO_REQUEST_ERROR = 'PHOTO_REQUEST_ERROR';
export const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';
export const SET_PAGE = 'SET_PAGE';

import {URL_API, CLIENT_ID} from '../../api/const';

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

// async action's generator
export const photoListRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  const page = getState().photoListReducer.currentPage;
  console.log('page: ', page);
  if (!token) return;

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
    })
    .catch(err => {
      dispatch(photoRequestError());
      console.log('err: ', err);
    });
};


