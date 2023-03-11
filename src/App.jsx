import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import MovieList from "./components/MovieList/MovieList";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=60f509cbcfbf32fd2ed6677aa2d75099";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=60f509cbcfbf32fd2ed6677aa2d75099&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const url = `${API_SEARCH}${searchValue}`;
      const res = await fetch(url);
      const data = await res.json();
      setSearchMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">MovieDb App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#trending">Trending</Nav.Link>
            </Nav>
            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                value={searchValue}
                onChange={handleSearchInput}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container my-4">
        {searchValue.length > 0 && searchMovies.length > 0 && (
          <MovieList movies={searchMovies} />
        )}
        {searchValue.length > 0 && searchMovies.length === 0 && (
          <h2>No results found</h2>
        )}
        {!searchValue && <MovieList movies={movies} />}
      </div>
    </div>
  );
}

export default App;
