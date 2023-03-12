import { useState } from "react";
import { fetchDetailMovie, fetchMovies, fetchMovieSearch, fetchUpcomingMovies } from "../tools/tmdb-api";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    const { data } = await fetchMovies();
    setMovies(data.results);
    setLoading(false);
  };

  const getOneMovie = async (movieId) => {
    setLoading(true);
    const { data } = await fetchDetailMovie(movieId);
    setMovie(data);
    setLoading(false);
  };

  const getUpcomingMovies =  async () => {
    setLoading(true);
    const { data } = await fetchUpcomingMovies();
    setMovie(data);
    setLoading(false);
  }

  const getMovieSearch =  async (query) => {
    setLoading(true);
    const { data } = await fetchMovieSearch(query);
    setMovie(data);
    setLoading(false);
  }

  return {
    movies,
    movie,
    upcomingMovies,
    movieSearch,
    isLoading,
    getMovies,
    getOneMovie,
    getUpcomingMovies,
    getMovieSearch,
  };
}
