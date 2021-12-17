import FilmsFilter from './filmsFilter/FilmsFilter'
import FilmsList from './filmsList/FilmsList'
import styles from './main.module.scss'

const Main = () => (
    <main className={styles.main}>
        <FilmsFilter />
        <FilmsList />
    </main>
)

export default Main
