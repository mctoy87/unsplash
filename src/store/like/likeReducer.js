import {
  LIKE_REQUEST,
  LIKE_REQUEST_ERROR,
  LIKE_REQUEST_SUCCESS,
} from './likeActions';

const initialState = {
  error: '',
  loading: false,
};

export const likeReducer = (state = initialState, action) => {
  // отлавливаем тип экшена
  switch (action.type) {
    case LIKE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case LIKE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case LIKE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // по дефолту возвращаем старый стейт
    default:
      return state;
  }
};
