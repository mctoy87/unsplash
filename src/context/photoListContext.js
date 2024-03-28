import React from 'react';
import PropTypes from 'prop-types';
import {usePhotoList} from '../hooks/usePhotoList';


export const photoListContext = React.createContext({});

export const PhotoListContextProvider = ({children}) => {
  const [photos] = usePhotoList();

  return (
    <photoListContext.Provider value={{photos}}>
      {children}
    </photoListContext.Provider>
  );
};

PhotoListContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

