import React from 'react';
import styles from './SearchResultsSummary.module.css';


export function SearchResultsSummary(){
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
            <   h1 className='subtitle'><strong>burgers</strong><strong> Berlin</strong></h1>
            <p>Showing 1-20 out of 400 results</p>
            </div>
        </div>
        
    );
}