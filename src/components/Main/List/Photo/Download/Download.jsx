import style from './Download.module.css';
import {ReactComponent as DownloadIcon} from './img/download.svg';

export const Download = () => (
  <div className={style.download}>
    <a className={style.linkDownload} href='#download'>
      <DownloadIcon/>
    </a>
  </div>
);
