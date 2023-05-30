const Book = require("../model/Book.model");
const User = require("../model/User.model")

module.exports.bookController = {
    getBooks: async (req, res) => {
        const data = await Book.find({});
        res.json(data);
        //показать все книги
    },
    getBook: async (req, res) => {
        const data = await Book.find(req.params.id);
        res.json(data);
    },
    getBookId: async (req, res) => {
        const data = await Book.find({genreId: req.params.id})
        res.json(data);
        //книги в жанре
    },
    createBook: async (req, res) => {
        await Book.create({
            book: req.body.book,
            userId: req.body.userId,
            genreId: req.body.genreId
        }).then(() => {
            res.json("Книга добавлена")
        })
    },
    deleteBook: async (req, res) => {
        const data = await Book.findByIdAndRemove(req.params.id);
        res.json("Книга удалена")
    },
    patchBook: async (req, res) => {
        const data = await Book.findByIdAndUpdate(req.params.id, {
            book: req.body.book,
            userId: req.body.userId,
            genreId: req.body.genreId
        }).then(() => {
            res.json("Книга изменена")
        })
    },
    rentBook: async (req, res) => {
        const { id } = req.params;
        const { userId } = req.params

        const book = await Book.findById(id);
        const user = await User.findById(userId);
        
        if(user.isBlocked === true) {
            return res.json('вы заблокированы')
        }

        if(book.userId) {
            return res.json('Эта книга уже арендована другим пользователем')
        }

        if(user.rentaBook.length >= 3) {
            return res.json('нельзя арендовать больше 3-х книг одновременно')
        }
        
        await Book.findByIdAndUpdate(id, {
            userId,
            //userId: userId
        });

        await User.findByIdAndUpdate(userId, {
            $push: {
                rentaBook: id,
            },
        });

        res.json('rented');
    },
    rentRemoveBook: async (req, res) => {
        const { bookId } = req.params;
        const { userId } = req.params;

        // const book = await Book.findById(id);
        // const user = await User.findById(userId);

        await Book.findByIdAndUpdate(bookId, {
                userId: null,
        });

        await User.findByIdAndUpdate(userId, {
            $pull: {
                rentaBook: bookId,
            },
        });

        await User.findByIdAndUpdate(userId, {
            isBlocked: true,
        });

        res.json('Книжк хьа еккхан, БАН тоьхна');
        //отбирать книгу с баном
    },
    returnUserBook: async(req, res) => {
        await Book.findByIdAndUpdate(req.params.id, {
            $set: {userId: null} 
        });

        await User.findByIdAndUpdate(req.params.userId, {
            $pull: {
                rentaBook: req.params.bookId,
            },
        });

        res.json("Вернул книгу")
        //возарващать книгу
    }
}
//сделать роуты