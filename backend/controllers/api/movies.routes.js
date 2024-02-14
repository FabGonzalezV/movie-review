import express from "express";
import MoviesController from "./movies.controller.js";
import ReviewsController from './reviews.controller.js';


const router = express.Router();

router.route("/").get(MoviesController.apiGetMovies);
router.route("/id/:id").get(MoviesController.apiGetMovieById);

router
.route("/review")
.get(ReviewsController.apiGetMovieReviews)
.post(ReviewsController.apiPostReview)
.put(ReviewsController.apiUpdateReview)
.delete(ReviewsController.apiDeleteReview)


router.route("/ratings").get(MoviesController.apiGetRatings);
export default router;

