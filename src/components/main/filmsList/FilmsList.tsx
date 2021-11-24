import React, { useState, useEffect } from "react"
import Film from "./film/Film"
import FilmService from "../../../services/filmService"
import { FilmInterface } from './types'
import './filmList.scss'

const FilmsList: React.FC = () => {
    const filmService = new FilmService()
    const [filmArr, setFilmArr] = useState([])
    useEffect(() => {
        filmService.getFilmList()
            .then(res => setFilmArr(res))
    }, [])

    return (
        <div className="filmList">
            {
                filmArr.map((el: FilmInterface) => {
                    return (
                        <Film
                            key={el.id}
                            title={el.title}
                            image={el.poster_path}
                            rate={el.vote_average}
                        />
                    )
                })
            }
        </div>
    )
}

export default FilmsList
