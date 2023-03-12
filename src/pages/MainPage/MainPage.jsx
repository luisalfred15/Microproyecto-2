import React, { useEffect } from 'react'
import { useMovies } from '../../hooks/useFilms'

function MainPage() {
  const {movies, getMovies, upcomingMovies, getUpcomingMovies, isLoading} = useMovies();

  useEffect(() => {
    getMovies();
    getUpcomingMovies();
  }, [])
  
  return (
    <div>
      <div className="container">
      <h1 className="title">Cartelera CCS</h1>
      <div className="characters">
        {isLoading && (
          <h1 className="title">Cargando...</h1>
        )}
        {!isLoading && (
          characters.map((character) => (
            <Card key={character.id} character = {character} />
          ))
        )}
      </div>
    </div>
    </div>
  )
}

export default MainPage