import style from './Image.module.css';
import PropTypes from 'prop-types';
// import nophoto from './img/nophoto.png';

export const Image = ({title, urls}) => (
  <a className={style.linkImage} href='#photo'>
    <img className={style.img} src={urls} alt={title}/>
  </a>
);

Image.propTypes = {
  title: PropTypes.string,
  urls: PropTypes.string,
};
