import {useState} from 'react';
import style from './Image.module.css';
import PropTypes from 'prop-types';
import Modal from './Modal';
// import nophoto from './img/nophoto.png';

export const Image = ({photoData}) => {
  const {title, urls} = photoData;
  const [IsModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a href='#photo'
        className={style.linkImage}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <img className={style.img} src={urls.small} alt={title}/>
      </a>
      {IsModalOpen &&
        <Modal
          photoData={photoData}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      }
    </>
  );
};

Image.propTypes = {
  photoData: PropTypes.object,
};
