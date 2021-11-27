interface FilmApiInterface {
    page: number
    results: FilmInterface[]
    total_pages: number
    total_results: number
}

export interface FilmInterface {
    id: number
    title: string
    poster_path: string
    vote_average: number
    overview: string
}

export interface GenresInterface {
    id: number
    name: string
}

export interface FilmInfoInterface extends FilmApiInterface {
    backdrop_path: string
    title: string
    genres: GenresInterface[]
    vote_average: number
}

// get API
const getResource = (url: string): Promise<FilmInfoInterface> => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => resolve(res.json()))
            .catch(err => reject(err))
    })
}

export const getFilmList = () => {
    return getResource(`${process.env.API_BASE}movie/popular${process.env.API_KEY}`)
}

export const getHeadFilm = () => {
    return getResource(`${process.env.API_BASE}movie/561=${process.env.API_KEY}`)
}
