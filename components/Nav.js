import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles['nav-header']}>Inventory Project</li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>
        <span className={styles['link-divider']}>|</span>
        <li>
          <Link href="/add">
            <a>Add New Item</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
