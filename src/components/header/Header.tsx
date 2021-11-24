import React from 'react'
import Search from './search/Search'
import './header.scss'
import Title from './title/Title'

const Header = () => {
    return (
        <header>
            <Search />
            <Title />
        </header>
    )
}

export default Header