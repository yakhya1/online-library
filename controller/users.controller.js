const User = require("../model/User.model");


module.exports.userController = {
    getUser: async (req, res) => {
        const data = await User.find({});
        res.json(data);
    },
    createUser: async (req, res) => {
        await User.create({
            name: req.body.name
        })
        res.json("Создан")
    },
    deleteUser: async (req, res) => {
        const data = await User.findByIdAndRemove(req.params.id);
        res.json("Пользователь удален")
    },
    patchUser: async (req, res) => {
        const data = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        }).then(() => {
            res.json('Пользователь изменен')
        })
    }
}