const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    review: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book",
    }
})

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;