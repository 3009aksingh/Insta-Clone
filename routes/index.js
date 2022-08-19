const express = require('express'); // common
const router = express.Router(); //common
// const request = require('request');

console.log('In index.js 1');
//welcome page -> for rendering main.ejs file
router.get('/', (req, res) => res.render('main'));

console.log('In index.js 2');

//for connecting with app.js
module.exports = router;

console.log('In index.js 3');