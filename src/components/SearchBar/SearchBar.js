import React from 'react';
import './searchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    getSortByClass(sortByOptions) {
        if(this.state.sortBy === sortByOptions) {
            return 'active' 
        } else {
            return ''
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption})
    }

    renderSortByoptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionsValue = sortByOptions[sortByOption];
            return <li key={sortByOptionsValue} className={this.getSortByClass(sortByOptionsValue)} onClick={this.handleSortByChange.bind(this,sortByOptionsValue)}>{sortByOption}</li>
        })
    }

    handleTermChange(event) {
        this.setState({term: event.target.value })
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value})
    }
    handleSearch(event) {
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
        event.preventDefault()
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
            <input onChange={this.handleTermChange} placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
        </div>
    </div>
        )
    }
}
export default SearchBar;