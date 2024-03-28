import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Like from '../../Like';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';

export const Modal = ({href, title, author, likes, closeModal, id}) => {
  const overlayRef = useRef(null);
  const closeModalRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current ||
        // закрывает модалку при клике на крестик
        closeModalRef.current.contains(target) ||
        // закрывает модалку при клике на Esc
        e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
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
          <Like likes={likes} id={id}/>
        </div>
        <button className={style.close} ref={closeModalRef}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.object,
  likes: PropTypes.number,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
