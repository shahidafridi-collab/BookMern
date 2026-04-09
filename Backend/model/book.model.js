import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    category: String,
    price: Number,
    rating: Number,
    reviews: Number,
    isBestseller: Boolean,
    coverColor: String
});



const Book = mongoose.model("Book", bookSchema);

export default Book;