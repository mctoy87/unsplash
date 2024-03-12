import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
// import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.flexContainer}>
        <Heading></Heading>
        <Logo/>
        {/* <Search/> */}
        <Auth auth={false}/>
      </div>
    </Layout>
  </header>
);
