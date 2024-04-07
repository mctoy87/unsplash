// import {applyMiddleware} from 'redux';
// export const store = createStore()
import {createStore} from 'redux';

const initialState = {
  photoList: 'Здесь будут твои фоточки',
};

// *экспериментирую с REDUX*
// вынесу в константу тип экшена
const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';
// для удобства создадим генератор экшенов
export const updatePhotoList = photoList => ({
  type: UPDATE_PHOTOLIST,
  photoList,
});

const rootReducer = (state = initialState, action) => {
  // *экспериментирую с REDUX*
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
export const store = createStore(rootReducer);
console.log('store: ', store);
