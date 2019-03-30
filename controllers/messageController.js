const db = require("../models");

module.exports = {
    addMessage: function (req, res) {
        console.log(req.body)
        db.Message
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}