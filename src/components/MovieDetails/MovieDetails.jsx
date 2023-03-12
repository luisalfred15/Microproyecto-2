import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=60f509cbcfbf32fd2ed6677aa2d75099`;

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      });
  }, [id]);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </Card>
        </Col>
        <Col md={8}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <p>
            Genres:{" "}
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
          <p>Original Language: {movie.original_language}</p>

          <p>Budget: {movie.budget}$</p>
          <p>Rating: {movie.vote_average}/10</p>
          <p>
            Production Companies:{" "}
            {movie.production_companies
              ?.map((company) => company.name)
              .join(", ")}
          </p>
          <p>Status: {movie.status}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
