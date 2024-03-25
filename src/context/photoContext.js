import React from 'react';
import PropTypes from 'prop-types';
import {usePhotos} from '../hooks/usePhotos';


export const photoContext = React.createContext({});

export const PhotoContextProvider = ({children}) => {
  const [photos] = usePhotos();

  return (
    <photoContext.Provider value={{photos}}>
      {children}
    </photoContext.Provider>
  );
};

PhotoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

