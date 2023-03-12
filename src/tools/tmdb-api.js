import axios from "axios";

const API_URL = "https://api.themoviedb.org/3"
const API_EXT = "/?api_key=33c5a0612f43367a8c4a73d80fc35531"

export async function fetchMovies() {
    return axios.get(API_URL + "/discover/movie" + API_EXT)
}

export async function fetchDetailMovie(movieId) {
    return axios.get(API_URL + "/movie/" + movieId + API_EXT)
}

export async function fetchUpcomingMovies() {
    return axios.get(API_URL + "/movie/upcoming" + API_EXT)
}

export async function fetchMovieSearch(query) {
    return axios.get(API_URL + "/search/movie" + API_EXT + "&query=" + query)
}