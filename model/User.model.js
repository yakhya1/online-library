const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    isBlocked: {
        type: Boolean,
        default: false,
    },
    rentaBook: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book"
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;