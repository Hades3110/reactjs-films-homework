import { GenreInterface } from "../../../../services/filmService";

export interface FilmPropertyInterface {
    title: string
    image: string
    rate: number
    overview: string
    filmGenres: number[]
    sortType: boolean
    genres: GenreInterface[]
}