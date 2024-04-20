import style from './List.module.css';
import Photo from './Photo';
import {usePhotoList} from '../../../hooks/usePhotoList';
import AuthLoader from '../../../UI/AuthLoader';
// import {generateRandomId} from '../../../utils/generateRandomId';

export const List = () => {
  const [photos, loading] = usePhotoList();
  console.log('photos: ', photos);

  return (
    <ul className={style.list}>
      {loading ? (
        <AuthLoader/>
      ) :
        photos.map(data =>
          <Photo key={data.id} photoData={data}/>
        )
      }
    </ul>
  );
};
