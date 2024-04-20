import {URL_API} from '../../api/const';

// описываем все экшены
export const MODAL_PHOTO_REQUEST = 'MODAL_PHOTO_REQUEST';
export const MODAL_PHOTO_REQUEST_SUCCESS = 'MODAL_PHOTO_REQUEST_SUCCESS';
export const MODAL_PHOTO_REQUEST_ERROR = 'MODAL_PHOTO_REQUEST_ERROR';
export const CLEAR_DATA = 'CLEAR_DATA';

// создадим action creator`s
export const modalPhotoRequest = () => ({
  type: MODAL_PHOTO_REQUEST,
});

export const modalPhotoRequestSuccess = (photo) => ({
  type: MODAL_PHOTO_REQUEST_SUCCESS,
  photo,
});

export const modalPhotoRequestError = (error) => ({
  type: MODAL_PHOTO_REQUEST_ERROR,
  error,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

// async action's generator
export const modalPhotoRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(modalPhotoRequest());
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
      dispatch(modalPhotoRequestSuccess({data}));
      console.log('photoData: ', data);
    })
    .catch(err => {
      modalPhotoRequestError(err);
      console.log('err: ', err);
    });
};
