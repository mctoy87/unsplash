import style from './List.module.css';
import Photo from './Photo';

export const List = () => {
  const photoData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    likes: 24,
    date: '2016-05-03T11:00:28-04:00',
  };

  return (
    <ul className={style.list}>
      <Photo photoData={photoData}/>
      <Photo photoData={photoData}/>
      <Photo photoData={photoData}/>
      <Photo photoData={photoData}/>
    </ul>
  );
};
