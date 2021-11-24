import React from 'react'
import './search.scss'
import imgSearch from '/public/assets/search.png'

const Search = () => {
    return (
        <div className="search">
            <h1>FILMS</h1>
            <div>
                <input type="text" />
                <img src={imgSearch} alt="" />
            </div>

        </div>
    )
}

export default Search