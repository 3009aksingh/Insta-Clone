const express = require('express');
// const passport = require('passport');
// const express_session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/keys').mongoURI;
const app = express();
console.log("In app.js 1");
// app.use(passport.initialize());
// app.use(passport.session());
app.use(expressLayouts);

console.log("In app.js 2");

app.set('view engine', 'ejs');

console.log("In app.js 3");

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express_session);

console.log("In app.js 4");

app.get("/", (req, res) => {
  console.log("GET before request /public/index.html");
  res.sendFile(__dirname + "/public/index.html");
  console.log("GET after request /public/index.html");
});

console.log("In app.js 5");

app.get("/main", (req, res) => { //links main website with PWA's public folder
    res.render("main.ejs");
})

console.log("In app.js 6");

app.use(express.urlencoded({
    extended: false
  }));

app.use(express.json());
  
console.log("In app.js 7");

app.use('/', require('./routes/index.js'));
  
console.log("In app.js 8");

app.use('/users', require('./routes/users.js'));

console.log("In app.js 9");

mongoose
    .connect(
      db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => console.log('MongoDB Connected 🎉 '))
    .catch(err => console.log(err));
  
const PORT = process.env.PORT || 8000;

console.log("In app.js 10");

app.listen(PORT, console.log(`Server running on  ${PORT}`));