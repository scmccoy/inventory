import Head from 'next/head';
import Nav from './Nav';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  console.log('CHILDREN: ', children);
  return (
    <div className={styles['layout']}>
      <Head>
        <title>Inventory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <hr className={styles['nav-divider']} />
      {/* <main>{children}</main> */}
      <main>
        <h1>main section</h1>
      </main>
    </div>
  );
};

export default Layout;
