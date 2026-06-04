const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { geocodeLocation } = require("./utils/geocode");

const MONGO_URL = "mongodb://127.0.0.1:27017/travique";

async function updateCoordinates() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    const listings = await Listing.find({});

    for (let listing of listings) {
      if (listing.latitude && listing.longitude) {
        console.log(`Skipping: ${listing.title}`);
        continue;
      }

      const { latitude, longitude } = await geocodeLocation(
        listing.location,
        listing.country
      );

      listing.latitude = latitude;
      listing.longitude = longitude;

      await listing.save();

      console.log(
        `Updated: ${listing.title} -> ${latitude}, ${longitude}`
      );
    }

    console.log("All listings updated!");
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

updateCoordinates();