import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

// derived from JSX below.. we can insert this directly to App.js. Notice the call back function of console.log
// we cannot write the console log function afterthe this.setState function, because it's Asynchronous. Instead
// we have to write console.log as a callback function within this.setState.

{/* <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            this.setState({ searchField: e.target.value },
              () => console.log('searchField: ' + this.state.searchField));
          }}
        /> */}