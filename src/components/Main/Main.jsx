import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';
import {Route, Routes} from 'react-router-dom';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path={'/'} element={<List/>}/>
      </Routes>
    </Layout>
  </main>
);
