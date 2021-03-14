import React from 'react';
import styles from './SearchResultsSummary.module.css';


export function SearchResultsSummary(props){
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>Parking Lots in </strong><strong> {props.location}</strong></h1>
                <p>Showing 1-20 out of 400 results</p>
            </div>
        </div>
        
    );
}