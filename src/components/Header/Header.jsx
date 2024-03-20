import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
// import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import PropTypes from 'prop-types';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.flexContainer}>
        <Heading></Heading>
        <Logo/>
        {/* <Search/> */}
        <Auth/>
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
