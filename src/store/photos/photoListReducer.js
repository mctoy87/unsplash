import {UPDATE_PHOTOLIST} from './photoActions';

const initialState = {
  photoList: 'Здесь будут твои фоточки',
};

export const photoListReducer = (state = initialState, action) => {
  // отлавливаем тип экшена
  switch (action.type) {
    case UPDATE_PHOTOLIST:
      return {
        ...state,
        photoList: action.photoList,
      };
    // по дефолту возвращаем старый стейт
    default:
      return state;
  }
};
