import style from './Download.module.css';
import {ReactComponent as DownloadIcon} from './img/download.svg';
import PropTypes from 'prop-types';

export const Download = ({links}) => (
  <div className={style.download}>
    <a className={style.linkDownload} href={links.download}>
      <DownloadIcon/>
    </a>
  </div>
);

Download.propTypes = {
  links: PropTypes.object,
};
