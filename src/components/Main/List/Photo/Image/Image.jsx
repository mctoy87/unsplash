import {useState} from 'react';
import style from './Image.module.css';
import PropTypes from 'prop-types';
import Modal from './Modal';
// import nophoto from './img/nophoto.png';

export const Image = ({title, urls, author, likes}) => {
  const [IsModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a
        className={style.linkImage}
        href='#content'
        onClick={() => setIsModalOpen(true)}
      >
        <img className={style.img} src={urls} alt={title}/>
      </a>
      {IsModalOpen &&
        <Modal href={urls} title={title} author={author} likes={likes}/>
      }
    </>
  );
};

Image.propTypes = {
  title: PropTypes.string,
  urls: PropTypes.string,
  author: PropTypes.object,
  likes: PropTypes.number,
};
