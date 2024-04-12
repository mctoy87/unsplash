const initialState = {
  photoList: 'Здесь будут твои фоточки',
};

// photoListActions.js
const UPDATE_PHOTOLIST = 'UPDATE_PHOTOLIST';

// для удобства создадим генератор's экшенов
export const updatePhotoList = photoList => ({
  type: UPDATE_PHOTOLIST,
  photoList,
});

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
