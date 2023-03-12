// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const API_KEY = "60f509cbcfbf32fd2ed6677aa2d75099";
// const API_BASE_URL = "https://api.themoviedb.org/3/";

// function MovieList() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         `${API_BASE_URL}movie/popular?api_key=${API_KEY}`
//       );
//       setMovies(response.data.results);
//     };
//     fetchData();
//   }, []);

//   return (
//     <Container>
//       <Row>
//         {movies.map((movie) => (
//           <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               />
//               <Card.Body>
//                 <Card.Title>{movie.title}</Card.Title>
//                 <Card.Text>{movie.overview}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default MovieList;
