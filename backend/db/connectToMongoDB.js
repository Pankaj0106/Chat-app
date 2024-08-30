import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Conencted to mongodb")
    }catch(error){
        console.log("Error connecting to database",error.message)
    }
}

export default connectToMongoDb