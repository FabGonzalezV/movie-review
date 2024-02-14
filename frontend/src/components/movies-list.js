import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies.js";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentSearchMode, setCurrentSearchMode] = useState("")
  useEffect(() =>{
    setCurrentPage(0)
    },[currentSearchMode])


  // useEffect(() => {
  //   //retrieveMovies();
  //   retrieveRatings();
  // }, []);

  useEffect(() =>{
     
    retrieveNextPage()
    },[currentPage])


    const retrieveNextPage = () => {
      if(currentSearchMode === "findByTitle")
      findByTitle()
      else if(currentSearchMode === "findByRating")
      findByRating()
      else
      retrieveMovies()
      }

  const retrieveMovies = () => {
    setCurrentSearchMode("")
    MovieDataService.getAll(currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then((response) => {
        console.log(response.data);
        //start with 'All ratings' if user doesn't specify any ratings
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  const onChangeSearchRating = (e) => {
    const searchRating = e.target.value;
    setSearchRating(searchRating);
  };

  const find = (query, by) => {
    MovieDataService.find(query, by, currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((err) => console.log(err));
  };

  const findByTitle = () => {
    setCurrentSearchMode("findByTitle")
    find(searchTitle, "title");
  };
  const findByRating = () => {
    setCurrentSearchMode("findByRating")
    if (searchRating === "All  Ratings") {
      retrieveMovies();
    } else {
      find(searchRating, "rated");
    }
  };

  return (
    <div className="App">
      <Container>
        <br></br>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Buscar por título"
                  value={searchTitle}
                  onChange={onChangeSearchTitle}
                />
              </Form.Group>
              <br></br>
              <Button variant="primary" type="button" onClick={findByTitle}>
                Buscar
              </Button>
              <br></br>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control as="select" onChange={onChangeSearchRating}>
                  {ratings.map((rating) => {
                    return <option value={rating}>{rating}</option>;
                  })}
                </Form.Control>
                <br></br>
              </Form.Group>

              <Button variant="primary" type="button" onClick={findByRating}>
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
        <br></br>
        <Row>
          {movies.map((movie) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    src={`${movie.poster}/100px180`}
                    alt={`The movie ${movie.title}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>

                    <Card.Text>Rating: {movie.rated}/</Card.Text>
                    <Card.Text>Rating: {movie.plot}/</Card.Text>
                    <Link to={`/movies/${movie._id}`}>View Reviews</Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <br />
        Showing page: {currentPage}.
        <Button
          variant="link"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Get next {entriesPerPage} results
        </Button>
      </Container>
    </div>
  );
};

export default MoviesList;
