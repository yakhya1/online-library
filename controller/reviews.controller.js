const Review = require('../model/Review.model')

module.exports.reviewController = {
    getReview: async (req, res) => {
        const data = await Review.find({bookId: req.body.bookId});
        res.json(data)
    },
    createReview: async (req, res) => {
        Review.create({
            review: req.body.review,
            userId: req.body.userId,
            bookId: req.body.bookId
        }).then(() => {
            res.json("Отзыв добавлен")
        })
    },
    deleteReview: async (req, res) => {
        const data  = await Review.findByIdAndDelete(req.params.id);
        res.json("Отзыв удален")
    }
}