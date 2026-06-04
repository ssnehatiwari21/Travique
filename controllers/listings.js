const Listing = require("../models/listing");
const {geocodeLocation} = require("../utils/geocode");
const categorize = require("../utils/categorize");

module.exports.index=async (req,res)=>{
  const {category,tax} = req.query;
  const showTax = tax === "true";
  let allListings = await Listing.find({});
  allListings = allListings.map(l => ({
    ...l._doc,
    category: categorize(l)
  }));

  const filtered = category && category !== "all"
    ? allListings.filter(l => l.category === category)
    : allListings;
  res.render("listings/index.ejs",{
    allListings:filtered,
    activeCategory: category || "all",
    showTax
  });
};

module.exports.new=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.search = async (req, res) => {
  const { q } = req.query;
  const query = q ? q.trim() : "";

  let allListings = [];

  if (query.length > 0) {
    const regex = new RegExp(query, "i");
    allListings = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
        { description: regex },
      ]
    });
  }

  allListings = allListings.map(l => ({ ...l._doc, category: categorize(l) }));

  res.render("listings/index", {
    allListings,
    activeCategory: "all",
    showTax: false,
    searchQuery: query
  });
};


module.exports.show=async (req,res)=>{
  let {id}=req.params;
  const listing = await Listing.findById(id).populate({path:"reviews", populate:{path:"author"}}).populate("owner");
  if(!listing){
    req.flash("error","Cannot find that listing!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs",{listing})

};

module.exports.create=async (req,res,next)=>{
    const newListing=new Listing(req.body.listing);
    newListing.owner = req.user._id;
    
    // Geocode location to get coordinates
    const {latitude, longitude} = await geocodeLocation(newListing.location, newListing.country);
    newListing.latitude = latitude;
    newListing.longitude = longitude;
    
    if (req.file) {
      newListing.image = {
        filename: req.file.filename,
        url: req.file.path
      };
    }
    await newListing.save();
    req.flash("success","Successfully made a new listing!");
    res.redirect("/listings");
};

module.exports.edit=async (req,res)=>{
  let {id}=req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Cannot find that listing!");
    return res.redirect("/listings");
  }

  listing.image.url = listing.image.url.replace("/upload","/upload/h_300,w_250");
  res.render("listings/edit.ejs",{listing});
};

module.exports.update=async (req,res)=>{
  let {id}=req.params;
  const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing}, {new:true});
  
  // Geocode location to get updated coordinates
  const {latitude, longitude} = await geocodeLocation(listing.location, listing.country);
  listing.latitude = latitude;
  listing.longitude = longitude;
  
  if (req.file) {
    listing.image = {
      filename: req.file.filename,
      url: req.file.path
    };
  }
  await listing.save();
  req.flash("success","Successfully updated listing!");
  res.redirect(`/listings/${id}`);
};

module.exports.delete=async (req,res)=>{
  let {id}=req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Successfully deleted listing!");
  res.redirect("/listings");
};


