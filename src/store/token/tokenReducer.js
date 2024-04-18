import {
  SET_AUTH_CODE,
  DELETE_TOKEN,
  TOKEN_REQUEST,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_ERROR
} from './tokenActions';

const initialState = {
  token: '',
  code: '',
};

export const tokenReducer = (state = initialState, action) => {
  // отлавливаем тип экшена
  switch (action.type) {
    case TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        error: '',
      };
    case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_AUTH_CODE:
      return {
        ...state,
        code: action.code,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };

    // по дефолту возвращаем старый стейт
    default:
      return state;
  }
};
