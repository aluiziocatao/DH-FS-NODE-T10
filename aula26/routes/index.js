const express = require('express');
const router = express.Router();
const CardController = require("../controllers/CardController");
/* GET home page. */
router.get('/', "CardController.index");

module.exports = router;