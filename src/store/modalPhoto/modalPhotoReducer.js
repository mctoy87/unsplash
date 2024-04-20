import {
  CLEAR_DATA,
  MODAL_PHOTO_REQUEST,
  MODAL_PHOTO_REQUEST_ERROR,
  MODAL_PHOTO_REQUEST_SUCCESS
} from './modalPhotoActions';

const initialState = {
  photo: {},
  error: '',
  loading: false,
};

export const modalPhotoReducer = (state = initialState, action) => {
  // отлавливаем тип экшена
  switch (action.type) {
    case MODAL_PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case MODAL_PHOTO_REQUEST_SUCCESS:
      return {
        ...state,
        photo: action.photo,
        loading: false,
        error: '',
      };
    case MODAL_PHOTO_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CLEAR_DATA:
      return {
        ...state,
        photo: {},
      };

    // по дефолту возвращаем старый стейт
    default:
      return state;
  }
};
