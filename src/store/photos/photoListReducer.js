import {
  PHOTO_REQUEST,
  PHOTO_REQUEST_ERROR,
  PHOTO_REQUEST_SUCCESS,
  UPDATE_PHOTOLIST,
  SET_PAGE,
  PHOTO_REQUEST_SUCCESS_AFTER,
  SET_ISLAST,
} from './photoActions';

const initialState = {
  photoList: [],
  currentPage: 1,
  error: '',
  isLast: false,
  loading: false,
};


export const photoListReducer = (state = initialState, action) => {
  // отлавливаем тип экшена
  switch (action.type) {
    case PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case PHOTO_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        photoList: action.photoList,
        error: '',
      };
    case PHOTO_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        photoList: [...state.photoList, ...action.photoList],
        error: '',
      };
    case PHOTO_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_PHOTOLIST:
      return {
        ...state,
        photoList: action.photoList,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_ISLAST:
      return {
        ...state,
        isLast: true,
      };
    // по дефолту возвращаем старый стейт
    default:
      return state;
  }
};
