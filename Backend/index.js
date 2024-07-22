import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
import path from 'path'

const app = express();
app.use(cors());
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;

// Connect to MongoDB
const URI = process.env.MongoDBURI;
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
} catch(error) {
    console.log("Error: ", error)
}

// Routes
app.use("/book", bookRoute)
app.use("/user",userRoute)

// Deployment
if(process.env.NODE_ENV === "production"){
    const dirPath = path.resolve();
    app.use(express.static("Frontend/dist"))
    app.get("*",(req, res) => {
        res.sendFile(path.resolve(dirPath, "Frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})