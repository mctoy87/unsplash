import style from './Photo.module.css';
import formatDate from '../../../../utils/formatDate';
import Image from './Image';
import Avatar from './Avatar';
import Like from './Like';
import Download from './Download';
import PropTypes from 'prop-types';

export const Photo = ({photoData}) => {
  const {
    user: author,
    likes,
    created_at: date,
    links,
    id,
  } = photoData;

  return (
    <li className={style.item}>
      <Image photoData={photoData}/>
      <Avatar author={author}/>

      <div className={style.likeWrap}>
        <Like likes={likes} id={id}/>
        <time className={style.date} dateTime={date}>{formatDate(date)}</time>
        <Download links={links}/>
      </div>
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
