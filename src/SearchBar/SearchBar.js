import React, {useState} from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {

    const [location, setLocation] = useState(props.location || '');

    function submit(e) {

        if(typeof props.search === 'function'){
            props.search(location);
            console.log("Searching for Parking Lots in " + location);
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <div className="control">
                    <input className={`input is-large ${styles['input-control']}`} 
                        onChange={(e) => setLocation(e.target.value)}
                        type="text" 
                        placeholder="Enter Location"
                    />
                </div>
                <div className="control">
                    <button className={`button is-large is-info ${styles['search-button']}`} onClick={submit}>
                        Find Me Parking
                    </button>
                </div>
            </div>
        </form>
    );
}