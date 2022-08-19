//contact us form backend
// const validator = require("validator");

console.log("In Login.js 1");

const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: true,
    //     minLength: 3
    // },

    // lastName: {
    //     type: String,
    //     required: true,
    //     minLength: 3
    // },

    mail: {
        type: String,
        required: true,
        min:1

    },

    password: {
        type: String,
        required: true,
        min: 8
    },
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
