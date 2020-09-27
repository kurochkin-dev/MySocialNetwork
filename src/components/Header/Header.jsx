import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__img} src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png"></img>
        </header>
    );
}

export default Header;