import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=60f509cbcfbf32fd2ed6677aa2d75099";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;
