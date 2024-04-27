import style from './List.module.css';
import Photo from './Photo';
// import {usePhotoList} from '../../../hooks/usePhotoList';
import AuthLoader from '../../../UI/AuthLoader';
import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {photoListRequestAsync} from '../../../store/photos/photoActions';
import {useSelector} from 'react-redux';
// import {generateRandomId} from '../../../utils/generateRandomId';

export const List = () => {
  // const [photos, loading] = usePhotoList();
  const photos = useSelector(state => state.photoListReducer.photoList);
  const loading = useSelector(state => state.photoListReducer.loading);
  const endList = useRef(null); // получает ref
  const dispatch = useDispatch();

  // определяет доскролили ли до последнего эл-та
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('ВИЖУ ВИЖУ ВИЖУ');
        dispatch(photoListRequestAsync());
      }
    }, {
      rootMargin: '10px',
    });

    observer.observe(endList.current);

    // return () => { // убираем observer при демонтаже LIST
    //   if (endList.current) {
    //     observer.unobserve(endList.current);
    //   }
    // };
  }, [endList.current]);

  return (
    <ul className={style.list}>
      {loading && (
        <AuthLoader/>
      )}
      {photos && photos.map(data =>
        <Photo key={data.id} photoData={data}/>
      )}
      <li ref={endList} className={style.end}/>
    </ul>
  );
};
