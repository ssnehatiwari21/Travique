const mongoose=require("mongoose");
const initData=require("./data");
const Listing =require("../models/listing");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});


const dbUrl= process.env.ATLASDB_URL;

main()
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.error("DB connection error:", err);
  });

async function main() {
  await mongoose.connect(dbUrl, {
  });
}

const initDB = async () =>{
  await Listing.deleteMany({});
  const data=initData.data.map((obj)=>({
    ...obj,owner:"6a218185fd6c269ef7bdf9dc"
  }));
  await Listing.insertMany(data);
};

initDB();