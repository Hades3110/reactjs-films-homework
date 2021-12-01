import { useState, useEffect } from "react"
import FilmItem from "./filmItem/FilmItem"
import { FilmInterface, getFilmList } from "../../../services/filmService"
import './filmList.scss'

const FilmsList = ({ sortType }: { sortType: number }) => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [filmCount, setFilmCount] = useState<number>(12)
    const [listEnded, setListEnded] = useState<boolean>(false)

    const changeFilmCount = () => {
        if (filmArr.length - filmCount <= 12) {
            setFilmCount(12 + filmArr.length - filmCount)
            setListEnded(true)
        } else setFilmCount(filmCount + 12)
    }

    useEffect(() => {
        getFilmList()
            .then(res => setFilmArr(res.results))
    }, [])

    return (
        <>
            <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
                {
                    filmArr.map((el: FilmInterface, i: number) => {
                        if (i < filmCount) {
                            return (
                                <FilmItem
                                    sortType={sortType}
                                    key={el.id}
                                    title={el.title}
                                    image={el.poster_path}
                                    rate={el.vote_average}
                                    overview={el.overview}
                                    filmGenres={el.genre_ids}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="btn"
                onClick={() => changeFilmCount()}
                style={{ 'display': listEnded ? 'none' : 'block' }}>
                <button className="btn__more">Load More</button>
            </div>
        </>
    )
}

export default FilmsList
