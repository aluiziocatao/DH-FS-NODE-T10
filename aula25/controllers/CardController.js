const { Card }  = require("../models/card")

module.exports = {
  async index(req, res, next) {
    let cards = await Card.findAll();
    res.render('index', { cards, user: req.session.user });
  }
}