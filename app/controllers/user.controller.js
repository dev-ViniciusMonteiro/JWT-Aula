const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = async(req, res) => {
    var array = []
    for (i = 0; i < 50; i++) {
        let user = await User.findOne({
            where: {
                username: i
            }
        })
        if (user != null) {
            array.push(user)
        }
    }


    res.send({ user: array })

};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};