const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/messages")
    .post(messageController.addMessage)

module.exports = router;