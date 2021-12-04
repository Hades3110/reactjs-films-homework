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
    genre_ids: []
    genres: GenreInterface[]
}

export interface GenreInterface {
    id: number
    name: string
}

export interface FilmInfoInterface extends FilmApiInterface {
    backdrop_path: string
    title: string
    genres: GenreInterface[]
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

export const getTrendingFilm = () => {
    return getResource(`${process.env.API_BASE}movie/popular${process.env.API_KEY}`)
}

export const getTopRated = () => {
    return getResource(`${process.env.API_BASE}movie/top_rated${process.env.API_KEY}&language=en-US`)
}

export const getComingSoon = () => {
    return getResource(`${process.env.API_BASE}movie/upcoming${process.env.API_KEY}&language=en-US`)
}

export const getHeadFilm = () => {
    return getResource(`${process.env.API_BASE}movie/561=${process.env.API_KEY}`)
}

// export const getGenres = () => {
//     return getResource(`${process.env.API_BASE}genre/movie/list${process.env.API_KEY}&language=en-US`)
// }