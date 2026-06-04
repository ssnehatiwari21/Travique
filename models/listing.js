const mongoose=require('mongoose');
const Review = require('./review');
const Schema=mongoose.Schema;

const listingSchema = new Schema({
  title:{
    type:String,
    required:true,
  },
  description:String,
  image:{
    filename: {
      type:String,
      default:"listingimage",
    },
    url :{
      type:String,
      default:"https://images.unsplash.com/photo-1589593969598-0c60665647a3?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMyNzQ1OTk3fA&ixlib=rb-4.0.3",
      set:(v)=> v===""?"https://images.unsplash.com/photo-1589593969598-0c60665647a3?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMyNzQ1OTk3fA&ixlib=rb-4.0.3":v,
    }
  },
  price:Number,
  location:String,
  country:String,
  latitude:Number,
  longitude:Number,
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review",
    },
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
  }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
  }
  
});
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;