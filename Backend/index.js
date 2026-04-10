import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import signupRoute from "./route/signup.route.js";

dotenv.config();
const app = express();
app.use(cors({
    origin: [
        "https://book-wala-sigma.vercel.app", // ✅ your frontend
        "http://localhost:5173"  ,
        "https://69d8cc637d5e50e8b00d5f9e--book-wala.netlify.app/"             // ✅ local frontend (for dev)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000; // Good practice to check env for PORT
const URI = process.env.MongoDBURI;

// 1. Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Failed to connect:", error.message);
        process.exit(1);
    }
};

connectDB();

// 2. Middlewares
// app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Routes
app.use('/book', bookRoute);

app.get("/", (req, res) => { // Fix: Changed .use to .get for specific matching
    res.send('Bookstore API is running...');
});

app.use('/user', signupRoute);

// 4. Server Start
app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`); // Fix: Template literal
});