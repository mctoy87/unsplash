import style from './List.module.css';
import Photo from './Photo';
import {usePhotoList} from '../../../hooks/usePhotoList';
import AuthLoader from '../../../UI/AuthLoader';
// import {generateRandomId} from '../../../utils/generateRandomId';

export const List = () => {
  const [photos, loading] = usePhotoList();
  console.log('photos: ', photos);

  return (
    <>
      {loading && (
        <div className={style.loader}>
          <p >Загрузка данных...</p>
          <AuthLoader/>
        </div>)
      }
      <ul className={style.list}>
        {photos && photos.map(data =>
          <Photo key={data.id} photoData={data}/>
        )
        }
      </ul>
    </>
  );
};
