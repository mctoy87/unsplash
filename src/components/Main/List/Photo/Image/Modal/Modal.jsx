import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Like from '../../Like';
import ReactDOM from 'react-dom';

export const Modal = ({href, title, author, likes}) => (
  ReactDOM.createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          <img className={style.img} src={href} alt={title}/>
        </div>
        <div className={style.authorWrap}>
          <a className={style.linkAvatar} href={author.links.self}>
            <img
              className={style.avatar}
              src={author.profile_image.medium}
              alt='Аватар автора фотографии'
            />
            <p className={style.avatarName}>{author.username}</p>
          </a>
          <Like likes={likes}/>
        </div>
        <button className={style.close}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  )
);

Modal.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.object,
  likes: PropTypes.number,
};
