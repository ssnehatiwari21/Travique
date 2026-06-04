const mongoose=require("mongoose");
const initData=require("./data");
const Listing =require("../models/listing");

const MONGO_URL="mongodb://127.0.0.1:27017/travique";
main()
  .then(()=>{
    console.log("connected to DB");
  })
  .catch((err)=>{
    console.log(err);
  });

async function main(){
  await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
  await Listing.deleteMany({});
  const data=initData.data.map((obj)=>({
    ...obj,owner:"6a1d4682cc44118e51abbb04"
  }));
  await Listing.insertMany(data);
};

initDB();