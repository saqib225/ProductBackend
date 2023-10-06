const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/mernb";

const mongoDbConnection=async()=>{
  try{
      await mongoose.connect(mongoURI);
      console.log("Connect to Mongo is successful.");
  }
  catch(err){
    console.error(`Connect to Mongo is Unsuccessful ${err}`);
    
  }
}

module.exports=mongoDbConnection;