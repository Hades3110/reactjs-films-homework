import { Link, useNavigate } from 'react-router-dom'
import styles from './header.module.scss'
import imgSearch from '/public/assets/search.png'
import { useState } from 'react'

const Header = () => {

    const [value, setValue] = useState<string>('')

    const navigate = useNavigate()

    return <header>
        <Link to='/'><h1>FILMS</h1></Link>
        <div className={styles.search}>
            <input
                type='text'
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e): void => {
                    if (e.charCode === 13 && value !== '') {
                        navigate(`/search/${value}`)
                    }
                }}
            />
            <Link to={`/search/${value}`}>
                <img src={imgSearch} alt='' />
            </Link>
        </div>
    </header>
}

export default Header
