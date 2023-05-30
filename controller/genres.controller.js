const Genre = require("../model/Genre.model");

module.exports.genreController = {
    getGenre: async (req, res) => {
        const data = await Genre.find({});
        res.json(data);
    },
    createGenre: async (req, res) => {
        await Genre.create({
            title: req.body.title
        }).then(() => {
            res.json("Жанр добавлен");
        })
    },
    deleteGenre: async (req, res) => {
        const data = await Genre.findByIdAndRemove(req.params.id);
        res.json("Жанр удален")
    },
    patchGenre: async (req, res) => {
        const data = await Genre.findByIdAndUpdate(req.params.id, {
            title: req.body.title
        }).then(() => {
            res.json("Жанр обновлен");
        });
    }
}
