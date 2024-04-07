import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

console.log('React: ', React);
export const likeContext = React.createContext({});

export const LikeContextProvider = ({children}) => {
  // получаем валидированные данные пользователя
  const [isLiked, setIsLiked] = useState(null);

  return (
    // здесь передаем контекст
    <likeContext.Provider value={{isLiked, setIsLiked}}>
      {children}
    </likeContext.Provider>
  );
};

LikeContextProvider.propTypes = {
  // все типы у "детей" будут валидированы
  children: PropTypes.node.isRequired,
};
