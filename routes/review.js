const express=require("express");
const router=express.Router();
const Listing = require('../models/listing');
const Reviews = require('../models/review');
const wrapAsync=require("../utils/wrapAsync");
const {validateReview,isLoggedIn,isAuthor}=require("../middleware");
const reviewController= require("../controllers/reviews");


//POST REVIEWS ROUTE
router.post("/:id/reviews",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));

//DELETE REVIEW ROUTE
router.delete("/:id/reviews/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.deleteReview)
);

module.exports=router;