import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div>
            <div className="field has-addons">
                <div className="control">
                    <input className={`input is-large ${styles['input-control']}`} type="text" placeholder="Enter Location"/>
                </div>
                <div className="control">
                    <div className={`button is-large is-info ${styles['search-button']}`}>
                        Search
                    </div>
                </div>
            </div>
        </div>
    );
}