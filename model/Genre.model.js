const mongoose = require("mongoose");

const GenreSchema = mongoose.Schema({
    title: String,
});

const Genre = mongoose.model("Genre", GenreSchema);

module.exports = Genre;