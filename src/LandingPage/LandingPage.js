import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function LandingPage() {
    return(
        <div className={styles['landing-page']}>
            <div className={styles['search-area']}>
                <TopNav/>
                <img src={logo} className={styles.logo} alt='logo'/>
                <SearchBar/>
            </div>
        </div>

    );
}