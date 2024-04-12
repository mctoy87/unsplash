import {
  SET_AUTH_CODE,
  UPDATE_TOKEN,
  DELETE_TOKEN
} from './tokenActions';

const initialState = {
  token: '',
  code: '',
};

export const tokenReducer = (state = initialState, action) => {
  // отлавливаем тип экшена
  switch (action.type) {
    case SET_AUTH_CODE:
      return {
        ...state,
        code: action.code,
      };
    case UPDATE_TOKEN:
      console.log('action.token: ', action.token);
      return {
        ...state,
        token: action.token,
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
