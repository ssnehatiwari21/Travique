const Listing = require('../models/listing');
const Reviews = require('../models/review');



module.exports.postReview=async (req,res)=>{
  let {id}=req.params;
  let listing =await Listing.findById(id);
  let newReview=new Reviews(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success","Review added successfully!");
  res.redirect(`/listings/${id}`);
};


module.exports.deleteReview=async (req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Reviews.findByIdAndDelete(reviewId);
  req.flash("success","Review deleted successfully!");
  res.redirect(`/listings/${id}`);
  };