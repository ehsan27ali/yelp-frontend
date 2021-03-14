import React from 'react';
import logo from '../assets/logo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';

export function NavBar(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='logo'/></Link>
            <SearchBar location={ props.location }/>
        </div>

    );
}