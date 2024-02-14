// import React, { useState } from "react";
// import MovieDataService from "../services/movies";
// import { Link, useParams } from "react-router-dom";
// import { Form, Button, FormGroup } from "react-bootstrap";

// const AddReview = (props) => {
//   const movieId = useParams();
//   let editing = false;
//   let initialReviewState = "";
//   if (props.location.state && props.location.state.currentReview) {
//     editing = true;
//     initialReviewState = props.location.state.currentReview.review;
//   }
//   const [review, setReview] = useState(initialReviewState);
//   const [submitted, setSubmitted] = useState(false);

//   const onChangeReview = (e) => {
//     const review = e.target.value;
//     setReview(review);
//   };

//   const saveReview = () => {
//     var data = {
//       review: review,
//       name: props.user.name,
//       user_id: props.user._id,
//       movieId: movieId,
//     };
//     if (editing) {
//       // get existing review id
//       data.review_id = props.location.state.currentReview._id;

//       MovieDataService.updateReview(data)
//         .then((response) => {
//           setSubmitted(true);
//           console.log(response.data);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     } else {
//       MovieDataService.createReview(data)
//         .then((response) => {
//           setSubmitted(true);
//         })
//         .catch((e) => {
//           console.error(e);
//         });
//     }
//   };

//   return (
//     <div>
//       {submitted ? (
//         <div>
//           <h4>Review submitted successfully</h4>
//           <Link to={`/movies/${movieId}`}>Go back to movies list</Link>
//         </div>
//       ) : (
//         <Form>
//           <FormGroup>
//             <Form.Label>{editing ? "Edit" : "Create"}Review</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               value={review}
//               onChange={onChangeReview}
//               placeholder="Enter your review"
//             />
//           </FormGroup>
//           <Button variant="primary" onClick={saveReview}>
//             Submit
//           </Button>
//         </Form>
//       )}
//     </div>
//   );
// };
// export default AddReview;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";
import MovieDataService from "../services/movies";

const AddReview = ({ user }) => {
  const { movieId } = useParams();
  const location = useLocation();

  const [review, setReview] = useState(
    location.state?.currentReview?.review || ""
  );

  const [submitted, setSubmitted] = useState(false);

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const saveReview = async () => {
    const data = {
      review,
      name: user.name,
      user_id: user._id,
      movieId,
    };

    if (location.state?.currentReview) {
      // If editing, get existing review id
      data.review_id = location.state.currentReview._id;

      try {
        const response = await MovieDataService.updateReview(data);
        setSubmitted(true);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await MovieDataService.createReview(data);
        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h4>Review submitted successfully</h4>
          <Link to={`/movies/${movieId}`}>Go back to movies list</Link>
        </div>
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>
              <h1>
                {location.state?.currentReview ? "Edit" : "Create"} Review{" "}
              </h1>
            </Form.Label>
             <br></br> 
            <Form.Control
              type="text"
              required
              value={review}
              onChange={onChangeReview}
              placeholder="Enter your review"
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" onClick={saveReview}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddReview;
