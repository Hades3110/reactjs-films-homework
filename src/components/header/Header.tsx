import { Link, useNavigate } from 'react-router-dom'
import styles from './header.module.scss'
import imgSearch from '/public/assets/search.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeVideoWindow } from '../../redux/filmVideoPlay/action'

const Header = () => {
    const [value, setValue] = useState<string>('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return <header>
        <Link to='/'><h1>FILMS</h1></Link>
        <form className={styles.search} onSubmit={(e) => (
            value ? (navigate(`/search?film=${value}`),
                e.preventDefault(), dispatch(changeVideoWindow(false, 0))) : e.preventDefault()
        )}>
            <input
                onChange={(e) => setValue(e.target.value)}
            />
            <button><img src={imgSearch} alt='magnifying glass' /></button>
        </form>
    </header>
}

export default Header
