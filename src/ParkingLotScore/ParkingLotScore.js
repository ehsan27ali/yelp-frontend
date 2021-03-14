import React from 'react';
import styles from './ParkingLotScore.module.css';
import Rating from 'react-rating';

export function ParkingLotScore() {

    return(
        <div className={styles['score']}>
            <Rating
                emptySymbol="far fa-dot-circle"
                fullSymbol="fas fa-car"
                //fractions={2}
                readonly
                initialRating={3}
            />
            <p>numRatings</p>
        </div>
    );
}