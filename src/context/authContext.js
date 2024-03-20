import React from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '../hooks/useAuth';

export const authContext = React.createContext({});

export const AuthContextProvider = ({children}) => {
  // получаем валидированные данные пользователя
  const [auth, clearAuth] = useAuth();

  return (
    // здесь передаем контекст
    <authContext.Provider value={{auth, clearAuth}}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  // все типы у "детей" будут валидированы
  children: PropTypes.node.isRequired,
};
