import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <List/>
    </Layout>
  </main>
);
