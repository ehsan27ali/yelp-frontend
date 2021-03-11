import React from 'react';
import logo from '../assets/logo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';


export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <img src={logo} className={styles.logo} alt='logo'/>
            <SearchBar/>
        </div>

    );
}