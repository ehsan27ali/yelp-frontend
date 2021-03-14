import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import { ParkingLotScore } from '../../../ParkingLotScore/ParkingLotScore';

export function SearchResult() {
    
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/200' alt='business img' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className='subtitle'>Burgerplace</h2>
                <ParkingLotScore/>
                <BusinessRating/>
                <p>$$ <span className="tag">tags</span> <span className="tag">tags</span></p>
                <p>Link to Yelp</p>
            </div>
            <div className={styles['contact-info']}>
                <p>+2347893454</p>
                <p>2341 Example Street</p>
                <p>City Name, ST. 23412</p>
            </div>
        </div>
    );
}