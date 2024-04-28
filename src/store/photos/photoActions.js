// описываем все экшены
import {URL_API, CLIENT_ID} from '../../api/const';
import {getUniqPhoto} from '../../utils/getUniqPhoto'; // ищет уник. фото

export const PHOTO_REQUEST = 'PHOTO_REQUEST';
export const PHOTO_REQUEST_SUCCESS = 'PHOTO_REQUEST_SUCCESS';
export const PHOTO_REQUEST_SUCCESS_AFTER = 'PHOTO_REQUEST_SUCCESS_AFTER';
export const PHOTO_REQUEST_ERROR = 'PHOTO_REQUEST_ERROR';
export const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';
export const SET_PAGE = 'SET_PAGE';
export const SET_ISLAST = 'SET_ISLAST';

// создадим action creator`s
export const photoRequest = () => ({
  type: PHOTO_REQUEST,
});

export const photoRequestSuccess = (photoList) => ({
  type: PHOTO_REQUEST_SUCCESS,
  photoList,
});

export const photoRequestSuccessAfter = (photoList) => ({
  type: PHOTO_REQUEST_SUCCESS_AFTER,
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

export const setIsLast = () => ({
  type: SET_ISLAST,
});

// async action's generator
export const photoListRequestAsync = () => (dispatch, getState) => {
  const page = getState().photoListReducer.currentPage;
  const loading = getState().photoListReducer.loading;
  const isLast = getState().photoListReducer.isLast;
  const statePhoto = getState().photoListReducer.photoList;

  if (!CLIENT_ID || loading || isLast) return;

  dispatch(photoRequest());
  fetch(`${URL_API}/photos?${page ? `page=${page}` : ''}`, {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
    },
  })
    .then(response => {
      if (response.ok) {
        const totalPage = response.headers.get('X-Total');
        const perPage = response.headers.get('X-Per-Page');
        const lastPage = Math.ceil(totalPage / perPage);
        if (page === lastPage) setIsLast();
        return response.json();
      }
      if (response.status === 401) {
        throw new Error(response.status);
      }
    })
    .then(photoData => {
      if (page > 1) {
        // для фильтра уник. фото
        const uniqArr = getUniqPhoto(photoData, statePhoto);
        dispatch(photoRequestSuccessAfter(uniqArr));
      } else {
        dispatch(photoRequestSuccess(photoData));
      }
      dispatch(setPage(page + 1));
    })
    .catch(err => {
      dispatch(photoRequestError());
      console.log('err: ', err);
    });
};


