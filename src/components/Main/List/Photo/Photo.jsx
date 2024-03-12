import style from './Photo.module.css';
import formatDate from '../../../../utils/formatDate';
import Image from './Image';
import Avatar from './Avatar';
import Like from './Like';
import Download from './Download';
import PropTypes from 'prop-types';


export const Photo = ({photoData}) => {
  const {title, author, likes, date} = photoData;

  return (
    <li className={style.item}>
      <Image title={title}/>
      <Avatar author={author}/>

      <div className={style.likeWrap}>
        <Like likes={likes}/>
        <time className={style.date} dateTime={date}>{formatDate(date)}</time>
        <Download/>
      </div>
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
