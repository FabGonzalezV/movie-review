 


// import React, { useState, useEffect } from "react";
// import MovieDataService from "../services/movies.js";
// import { Link, useParams } from "react-router-dom";

// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import { Media } from 'reactstrap';
// import moment from "moment";

// const Movie = ({ user }) => {
//   const { movieId } = useParams();
   
//   const [movie, setMovie] = useState({
//    id: null,
//     title: "",
//     rated: "",
//     reviews: [],
//   });
 

//   useEffect(() => {
//     const getMovie = async () => {
//       try {
       
//         const response = await MovieDataService.get(movieId);
//         setMovie(response.data);
      
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
//     getMovie();
//   }, [movieId ]);

//   return (
//     <Container>
//       <Row>
//         <Col>
          
//           <Image src={`${movie?.poster}/100px250`} fluid />

//         </Col>
//         <Col>
//           <Card>
//             <Card.Header as="h5">{movie.title}</Card.Header>
//             <Card.Body>
//               <Card.Text>{movie.plot}</Card.Text>
//               {user && (
//                 <Link to={`/movies/${movieId}/reviews`}>Add a review</Link>
//               )}
//             </Card.Body>
//           </Card>
//           <h2>Reviews</h2>
//           <br></br>
//           {movie.reviews.map((review, index) => (
//             <Media key={index}>
//               <Media.Body>
//                 {`${review.name} reviewed on ${moment(review.date).format("Do MMMM YYYY")}`}
//                 <p>{review.review}</p>
//                 {user && user.id === review.user_id && (
//                   <Row>
//                     <Col>
//                       <Link
//                         to={{
//                           pathname: `/movies/${movieId}/review`,
//                           state: { currentReview: review },
//                         }}
//                       >
//                         Edit
//                       </Link>
//                     </Col>
//                     <Col>
//                       <Button variant="link">Delete</Button>
//                     </Col>
//                   </Row>
//                 )}
//               </Media.Body>
//             </Media>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Movie;


import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies.js";
import { Link, useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Movie = ({ user }) => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: [],
  });

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await MovieDataService.get(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <Container>
      <Row>
        <Col>
          <Image src={`${movie?.poster}/100px250`} fluid />
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">{movie.title}</Card.Header>
            <Card.Body>
              <Card.Text>{movie.plot}</Card.Text>
              {user && (
                <Link to={`/movies/${movieId}/reviews`}>Add a reviewssssss</Link>
              )}
            </Card.Body>
          </Card>
          <h2>Reviews</h2>
          <br />
          {movie.reviews.map((review, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{`${review.name} reviewed on ${moment(review.date).format("Do MMMM YYYY")}`}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
                {user && user.id === review.user_id && (
                  <Row>
                    <Col>
                      <Link
                        to={{
                          pathname: `/movies/${movieId}/review`,
                          state: { currentReview: review },
                        }}
                      >
                        Edit
                      </Link>
                    </Col>
                    <Col>
                      <Button variant="link">Delete</Button>
                    </Col>
                  </Row>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
