import style from './List.module.css';
import Photo from './Photo';
import {generateRandomId} from '../../../utils/generateRandomId';


export const List = () => {
  const photoData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      likes: 24,
      date: '2022-07-06T13:51:50.417+02:00',
      id: '123'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      likes: 77,
      date: '2023-11-19T13:51:50.417+02:00',
      id: '456'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      likes: 1001,
      date: '2024-01-27T13:51:50.417+02:00',
      id: '789'
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      likes: 65,
      date: '2023-09-03T13:51:50.417+02:00',
      id: '012'
    },
  ];

  console.log('generateRandomId: ', generateRandomId());

  return (
    <ul className={style.list}>
      {
        photoData.map(photoData =>
          <Photo key={photoData.id} photoData={photoData}/>
        )
      }
    </ul>
  );
};
