import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import { useLocation } from 'react-router-dom';


export function Search() {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let locationParam = params.get('find_loc');

    return (
        <div>
            <NavBar location={ locationParam }/>
            <SearchResultsSummary location={ locationParam }/>
            <SearchResults/>
        </div>
    );
}