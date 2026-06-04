const express=require("express");
const router=express.Router();
const Listing = require('../models/listing');
const wrapAsync=require("../utils/wrapAsync");
const {isLoggedIn,isOwner,validateListing}=require("../middleware");
const listingController= require("../controllers/listings");
const multer=require("multer");
const {storage}=require("../cloudConfig");
const upload=multer({storage});



//INDEX ROUTE
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, upload.single('listing[image][url]'), validateListing, wrapAsync(listingController.create));

//NEW ROUTE
router.get("/new",isLoggedIn,wrapAsync(listingController.new));

// SEARCH ROUTE
router.get("/search", wrapAsync(listingController.search));


//SHOW ROUTE
router.route("/:id")
.get(wrapAsync(listingController.show))
.put(isLoggedIn,isOwner,upload.single('listing[image][url]'), validateListing, wrapAsync(listingController.update))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.delete));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.edit));



module.exports=router;