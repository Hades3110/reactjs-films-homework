import { useState, useEffect } from "react"
import FilmRow from "./filmRow/FilmRow"
import FilmColumn from "./filmColumn/FilmColumn"
import FilmService from "../../../services/filmService"
import { FilmInterface } from './types'
import './filmList.scss'

const FilmsList = ({ sortType }: any) => {

    const filmService = new FilmService()

    const [filmArr, setFilmArr] = useState([])

    useEffect(() => {
        filmService.getFilmList()
            .then(res => setFilmArr(res))
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
