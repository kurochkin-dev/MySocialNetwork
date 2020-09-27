import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <ul>
          <li className="menu__item">
            <a className={styles.menu__link} href="#">profile</a>
          </li>
          <li className="menu__item">
            <a className={styles.menu__link} href="#">messages</a>
          </li>
          <li className="menu__item">
            <a className={styles.menu__link} href="#">news</a>
          </li>
          <li className="menu__item">
            <a className={styles.menu__link} href="#">music</a>
          </li>
          <li className="menu__item">
            <a className={styles.menu__link} href="#">settings</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;