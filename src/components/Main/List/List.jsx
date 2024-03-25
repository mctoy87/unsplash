import style from './List.module.css';
import Photo from './Photo';
// import {usePhotos} from '../../../hooks/usePhotos';
import {useContext} from 'react';
import {photoContext} from '../../../context/photoContext';
// import {generateRandomId} from '../../../utils/generateRandomId';

export const List = () => {
  const {photos} = useContext(photoContext);

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
