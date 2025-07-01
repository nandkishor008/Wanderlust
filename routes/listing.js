const express= require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}= require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });


//index route and create route
router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn,validateListing,upload.single("listing[image]"), wrapAsync(listingController.createListing));


//New Route
router.get("/new",isLoggedIn, listingController.renderNewForm );

//search
router.get("/suggest", wrapAsync(listingController.getSuggestions));

router.get("/search", wrapAsync(listingController.searchWithFilters));


// show route & update route & DELETE ROUTE

router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,  wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));

// edit route

router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));


module.exports=router;
