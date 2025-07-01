
const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
 const page = parseInt(req.query.page) || 1; // Current page number
  const limit = 15; // Maximum listings per page
  const skip = (page - 1) * limit;

  const totalListings = await Listing.countDocuments(); // Total listing count
  const totalPages = Math.ceil(totalListings / limit);  // Total pages

  const allListing = await Listing.find().skip(skip).limit(limit); // Paginated listings

  res.render("listings/index.ejs", { allListing,currentPage: page,totalPages,query: req.query,highlight: req.query.search || "", });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not Exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing, query: req.query });

};
module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry= response.body.features[0].geometry;
  let savedListing = await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not Exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_100,w_100");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", " Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  let { page = 1, category, search } = req.query;
  page = parseInt(page);

  await Listing.findByIdAndDelete(id);

  const queryObj = {};
  if (search) queryObj.title = { $regex: search, $options: "i" };
  if (category) queryObj.categories = category;

  const totalRemaining = await Listing.countDocuments(queryObj);
  const totalPages = Math.ceil(totalRemaining / 15);
  const finalPage = Math.max(1, Math.min(page, totalPages));

  let redirectUrl = `/listings/search?page=${finalPage}`;
  if (category) redirectUrl += `&category=${encodeURIComponent(category)}`;
  if (search) redirectUrl += `&search=${encodeURIComponent(search)}`;

  req.flash("success", "Listing Deleted!");
  res.redirect(redirectUrl);
};





module.exports.getSuggestions = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);

  const regex = new RegExp(q, "i");
  const listings = await Listing.find({ title: regex }).limit(6);
  const suggestions = listings.map(listing => listing.title);
  res.json(suggestions);
};

module.exports.searchWithFilters = async (req, res) => {
  const { search = "", category, page = 1 } = req.query;
  const limit = 15;
  const skip = (page - 1) * limit;

  const queryObj = {};

  if (search) {
    queryObj.title = { $regex: search, $options: "i" };
  }

  if (category) {
    queryObj.categories = category; // Adjust if your field is different (e.g., `categories`)
  }

  const totalListings = await Listing.countDocuments(queryObj);
  const totalPages = Math.ceil(totalListings / limit);

  const allListing = await Listing.find(queryObj).skip(skip).limit(limit);

  res.render("listings/index", {
    allListing,
    currentPage: parseInt(page),
    totalPages,
    query: req.query,
    highlight: search
  });
};




