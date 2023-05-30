const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./route/genres.route"));
app.use(require("./route/books.route"));
app.use(require("./route/reviews.route"));
app.use(require("./route/users.route"));

(async () => {
    try {
        mongoose.connect("mongodb+srv://gaitukaev777:IAKHia22@cluster0.xprg9jb.mongodb.net/onlain-library?retryWrites=true&w=majority")
        console.log('Mongo connected')
    }
    catch(error){
        console.log(error)
    }
})()

app.listen(4100, () => {
    console.log('Сервер запущен успешно')
});