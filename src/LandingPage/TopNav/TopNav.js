import React from 'react'
import styles from './TopNav.module.css';

export function TopNav() { 
    return (
        <div className={styles['top-nav']}>
            <div className={styles.right}>
                <span>Login</span>
                <button className='button'>Sign Up</button>
            </div>
        </div>
    )
}