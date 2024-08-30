import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"


import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cookieParser())


//To use the value of env
dotenv.config();
app.use("/api/auth",authRoute)   //Middleware
app.use("/api/messages",messageRoutes)   //Middleware
app.use("/api/users",userRoutes)   //Middleware



app.listen(PORT,() => {
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`)
})

