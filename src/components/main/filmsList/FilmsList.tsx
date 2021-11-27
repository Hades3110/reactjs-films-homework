import { useState, useEffect } from "react"
import FilmRow from "./filmRow/FilmRow"
import FilmColumn from "./filmColumn/FilmColumn"
import { FilmInterface, getFilmList } from "../../../services/filmService"
import './filmList.scss'

const FilmsList = ({ sortType }: { sortType: number }) => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])

    useEffect(() => {
        getFilmList()
            .then(res => setFilmArr(res.results.slice(0, 12)))
    }, [])

    return (
        <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
            {
                filmArr.map((el: FilmInterface) => {
                    if (sortType) {
                        return (
                            <FilmRow
                                key={el.id}
                                title={el.title}
                                image={el.poster_path}
                                rate={el.vote_average}
                            />
                        )
                    }
                    return (
                        <FilmColumn
                            key={el.id}
                            title={el.title}
                            image={el.poster_path}
                            rate={el.vote_average}
                            overview={el.overview}
                        />
                    )
                })
            }
        </div>
    )
}

export default FilmsList
