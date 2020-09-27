import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.menu__item}>
                    <NavLink activeClassName={styles.active} className={styles.menu__link}
                             to="/profile">profile</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink activeClassName={styles.active} className={styles.menu__link}
                             to="/dialogs">messages</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink activeClassName={styles.active} className={styles.menu__link} to="/news">news</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink activeClassName={styles.active} className={styles.menu__link} to="/music">music</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink activeClassName={styles.active} className={styles.menu__link}
                             to="/settings">settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;