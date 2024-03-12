import style from './Image.module.css';
import nophoto from './img/nophoto.png';

export const Image = (title) => (
  <a className={style.linkImage} href='#photo'>
    <img className={style.img} src={nophoto} alt={title}/>
  </a>
);
