import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieList({ match }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const API_URL = id
      ? `https://api.themoviedb.org/3/movie/${id}?api_key=60f509cbcfbf32fd2ed6677aa2d75099`
      : "https://api.themoviedb.org/3/movie/popular?api_key=60f509cbcfbf32fd2ed6677aa2d75099";

    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || [data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (!movies.length) {
    return <p>No movies found.</p>;
  }

  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <Link to={`movie/${movie.id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Title>{movie.title}</Card.Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;
