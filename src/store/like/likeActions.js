import axios from 'axios';
import {URL_API} from '../../api/const';

// описываем все экшены
export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_REQUEST_SUCCESS = 'LIKE_REQUEST_SUCCESS';
export const LIKE_REQUEST_ERROR = 'LIKE_REQUEST_ERROR';

// создадим action creator`s
export const likeRequest = () => ({
  type: LIKE_REQUEST,
});

export const likeRequestSuccess = () => ({
  type: LIKE_REQUEST_SUCCESS,
});

export const likeRequestError = (error) => ({
  type: LIKE_REQUEST_ERROR,
  error,
});

// async action's
// eslint-disable-next-line max-len
export const likeRequestAsync = (id, isLiked, setNewLikes) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token || (isLiked === null) || !id) return;
  dispatch(likeRequest());
  // меняю метод запроса к API по условию
  const method = isLiked ? 'POST' : 'DELETE';

  axios(`${URL_API}/photos/${id}/like`, {
    method: `${method}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data}) => {
      dispatch(likeRequestSuccess());
      setNewLikes(data.photo.likes);
    })
    .catch(err => {
      dispatch(likeRequestError());
      console.log('err: ', err);
    });
};

