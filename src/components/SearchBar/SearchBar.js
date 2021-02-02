import React from 'react';
import './searchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByoptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionsValue = sortByOptions[sortByOption];
            return <li key={sortByOptionsValue}>{sortByOption}</li>
        })
    }
    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
            <ul>
                {this.renderSortByoptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input placeholder="Search Businesses" />
            <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
            <a href='#'>Let's Go</a>
        </div>
    </div>
        )
    }
}
export default SearchBar;