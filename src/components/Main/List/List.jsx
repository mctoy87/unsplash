import style from './List.module.css';
import Photo from './Photo';
// import {usePhotos} from '../../../hooks/usePhotos';
import {useContext} from 'react';
import {photoListContext} from '../../../context/photoListContext';
// import {generateRandomId} from '../../../utils/generateRandomId';

export const List = () => {
  const {photos} = useContext(photoListContext);

  return (
    <ul className={style.list}>
      {
        photos.map(data =>
          <Photo key={data.id} photoData={data}/>
        )
      }
    </ul>
  );
};
