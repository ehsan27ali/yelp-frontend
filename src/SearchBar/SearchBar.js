import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div>
            <div className="field has-addons">
                <div className="control">
                    <input className={`input ${styles['input-control']}`} type="text" placeholder="Enter Location"/>
                </div>
                <div className="control">
                    <a className="button is-info">
                        Search
                    </a>
                </div>
            </div>
        </div>
    );
}