const { User } = require("../model")

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const user = await User.findAll();
            res.status(201).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
};