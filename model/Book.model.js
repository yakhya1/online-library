const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    book: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        default: null,
    },
    genreId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Genre"
    }
})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;