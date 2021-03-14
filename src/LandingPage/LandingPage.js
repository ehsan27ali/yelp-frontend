import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function LandingPage() {

    let history = useHistory();

    function search(location) {
        
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=Parking+Lots&find_loc=${urlEncodedLocation}`);
    }

    return(
        <div className={styles['search-area']}>
            <TopNav/>
            <Link to='/'><img src={logo} className={styles.logo} alt='logo'/></Link>
            {/*<SearchBar/>*/}
            <SearchBar search={search}/>
        </div>

    );
}