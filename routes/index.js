const express = require('express'); // common
const router = express.Router(); //common
// const request = require('request');


//welcome page -> for rendering main.ejs file
router.get('/', (req, res) => res.render('main'));
//for connecting with app.js
module.exports = router;