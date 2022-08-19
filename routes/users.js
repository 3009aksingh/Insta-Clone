const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const validator = require('validator');
var MongoClient = require('mongodb').MongoClient;
const Login = require('../models/Login')
const nodemailer = require("nodemailer");
const request = require('request');
var url = "mongodb+srv://Ankit3009:Ankita@cluster0.nc0m6ut.mongodb.net/Instagram?retryWrites=true&w=majority";

console.log("In users.js 1");
// router.get('/about', (req, res) => res.render('about'));
// router.get('/sponser', (req, res) => res.render('sponser'));
// router.get('/testimonial', (req, res) => res.render('testimonial'));

// router.get('/gallery', (req, res) => res.render('gallery'));

// router.get('/contact', (req, res) => res.render('contact'));

router.get('/login', (req, res) => res.render('login'));

// router.get('/events', (req, res) => res.render('events'));

console.log("In users.js 2");

// router.get('/team', (req, res) => res.render('team'));

// router.get('/polling', (req, res) => res.render('polling'));

// router.get('/stats', (req, res) => res.render('stats'));
// router.get('/signup', (req, res) => res.render('signup'));
// router.get('/newsletter', (req, res) => res.render('newsletter'));
// router.get('/success', (req, res) => res.render('success'));

// router.get('/fail', (req, res) => res.render('fail'));

// router.post('/signup', (req, res) => {
//     const {
//         firstName,
//         lastName,
//         email,
//         dob
//     } = req.body;

//     // VALIDATING THE FORM THAT IS CHECKIN EVERY ENRTY IS FILLED 
//     if (!firstName || !lastName || !email) {
//         res.redirect('/users/fail'); //REDIRECTING TO THE FAIL PAGE
//         return;
//     }

//     //CONSTRUCTING THE REQUIRED DATA THAT IS FOR POSTDATA
//     const data = {
//         members: [{
//             email_address: email, //IT WILL PULL THE EMAIL FROM THE BODY
//             status: 'subscribed',
//             merge_fields: {
//                 FNAME: firstName,
//                 LNAME: lastName,
//                 BIRTHDAY: dob
//             }
//         }]
//     }

//     //CONVERTING THE ABOVE DATA OBJECT INTO A STRING
//     postData = JSON.stringify(data);

//     // CONNECTING TO MAILCHIMP
//     const option = {
//         url: 'https://us6.api.mailchimp.com/3.0/lists/0abd47d710', //LIST ID IS GIVEN HERE
//         method: 'POST',
//         headers: {
//             Authorization: 'auth 67237e5964221333eb1bba707f06c4a3-us6' //API KEY IS GIVEN HERE
//         },
//         body: postData
//     };
//     request(option, (err, response, body) => {
//         //CHECKING FOR AN ERROR & IF ERROR OCCURED THE REDIRECTING IT TO FAIL PAGE
//         if (err) {
//             res.redirect('/users/fail');
//         }
//         //IF ERROR IS NOT FOUND
//         else {
//             //AGAIN WE WILL CONFIRM FOR THE STATUS CODE THAT IS IF STATUS CODE IS 200 THEN EVERYTHING IS OK
//             if (response.statusCode === 200) {
//                 res.redirect('/users/success');
//             } else {
//                 res.redirect('/users/fail');
//             }
//         }
//     });
// });


// router.post("/contact", async (req, res) => {


//     console.log("inside contact backend");
//     var username = req.body.name;
//     var useremail = req.body.email;
//     var userphone = req.body.phone;
//     var usermessage = req.body.message;
//     // New Code
//     console.log(useremail);

//     MongoClient.connect(url, {
//         useUnifiedTopology: true
//     }, function (err, dbData) {
//         if (err) {
//             console.log('something went wrong here ' + err);
//         } else {
//             console.log("connected successfully");
//             var dbObj = dbData.db("EventWebsite"); // creating a database in mongodb

//             // For insertOne
//             var dataObj = {
//                 name: username,
//                 email: useremail,
//                 phone: userphone,
//                 message: usermessage
//             };

//             // Mail code 1

//             // transporter
//             var transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: 'sstechservices2311@gmail.com',
//                     pass: 'ankit@123'
//                 }
//             });

//             // mail information
//             var mailoptions = {
//                 from: 'sstechservices2311@gmail.com',
//                 to: 'sushilsshinde6@gmail.com',
//                 subject: 'Welcome User',
//                 // text: 'Hello, testing mail ahead!!!'
//                 html: `
//                        <h2>Customer details are as follows:</h2>
//                        <table style="width: 100%;">
//                            <tr>
//                                <td class="bg-secondary text-dark">Name</td>
//                                <td>${username}</td>
//                            </tr>
//                            <tr>
//                                <td class="bg-secondary text-light">Email Address</td>
//                                <td>${useremail}</td>
//                            </tr>
//                            <tr>
//                                <td class="bg-secondary text-light">Contact Details</td>
//                                <td>${userphone}</td>
//                            </tr>
//                            <tr>
//                                <td class="bg-secondary text-light">Message</td>
//                                <td>${usermessage}</td>
//                            </tr>
//                        </table>`
//                 // Reference : https://www.w3schools.com/nodejs/nodejs_email.asp
//             };

//             transporter.sendMail(mailoptions, function (error, information) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     // console.log(information.reponse);
//                     // console.log(information);
//                     console.log("Mail Send to Sushil");
//                 }
//             });
//             // End Mail code 1

//             // Mail code 2

//             // transporter
//             var transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: 'sstechservices2311@gmail.com',
//                     pass: 'ankit@123'
//                 }
//             });

//             // mail information
//             var mailoptions = {
//                 from: 'sstechservices2311@gmail.com',
//                 to: useremail, // testing
//                 subject: 'Confirmation Mail',
//                 // text: 'Hello, testing mail ahead!!!'
//                 html: `
//                        <h2>Your details received are as follows:</h2>
//                        <table style="width: 100%;">
//                            <tr>
//                                <td class="bg-secondary text-dark">Name</td>
//                                <td>${username}</td>
//                            </tr>
//                            <tr>
//                                <td class="bg-secondary text-light">Email Address</td>
//                                <td>${useremail}</td>
//                            </tr>
//                            <tr>
//                                <td class="bg-secondary text-light">Contact Details</td>
//                                <td>${userphone}</td>
//                            </tr>
//                            <tr>
//                                <td class="bg-secondary text-light">Message</td>
//                                <td>${usermessage}</td>
//                            </tr>
//                        </table>
//                        <br><h4>From SS Tech</h4>
//                        <br>Do not reply to this mail. This is auto generated mail.`
//                 // Reference : https://www.w3schools.com/nodejs/nodejs_email.asp
//             };

//             transporter.sendMail(mailoptions, function (error, information) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     // console.log(information.reponse);
//                     // console.log(information);
//                     console.log("Mail Send to " + useremail);
//                 }
//             });
//             // End Mail code 2

//             dbObj.collection("users").insertOne(dataObj, function (err, data) {

//                 if (err) {
//                     console.log("err2 = " + err);
//                 } else {
//                     console.log(data.insertedCount + " documents inserted");
//                     dbData.close();

//                     // Previous mail code

//                     // res.status(201).render("index"); // wait
//                     res.redirect('/users/contact'); // try
//                 }
//             })

//         }

//     });

// })

router.post("/login", async (req, res) => {
    console.log("inside login backend");

    // var userfirstname = req.body.firstName;
    // var userlastname = req.body.lastName;
    var usermail = req.body.mail;
    // var userphone = req.body.phone;
    var userpassword = req.body.password;
    // New Code
    console.log(usermail);

    MongoClient.connect(url, {
        useUnifiedTopology: true
    }, function (err, dbData) {
        if (err) {
            console.log('something went wrong here ' + err);
        } else {
            console.log("connected successfully");
            var dbObj = dbData.db("Instagram"); // creating a database in mongodb

            // For insertOne
            var dataObj = {
                
                mail: usermail,
                password: userpassword
            };

            // // Mail code 1

            // // transporter
            // var transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: 'sstechservices2311@gmail.com',
            //         pass: 'ankit@123'
            //     }
            // });

            // // mail information
            // var mailoptions = {
            //     from: 'sstechservices2311@gmail.com',
            //     to: 'sushilsshinde6@gmail.com',
            //     subject: 'Welcome User',
            //     // text: 'Hello, testing mail ahead!!!'
            //     html: `
            //            <h2>Customer details are as follows:</h2>
            //            <table style="width: 100%;">
            //                <tr>
            //                    <td class="bg-secondary text-dark">First Name</td>
            //                    <td>${userfirstname}</td>
            //                </tr>
            //                <tr>
            //                    <td class="bg-secondary text-light">Last Name</td>
            //                    <td>${userlastname}</td>
            //                </tr>
            //                <tr>
            //                    <td class="bg-secondary text-light">User Email ID</td>
            //                    <td>${usermail}</td>
            //                </tr>
            //                <tr>
            //                    <td class="bg-secondary text-light">User Phone no.</td>
            //                    <td>${userphone}</td>
            //                </tr>
            //            </table>
            //            <br><h4>From Event Website Portal</h4><br>
            //            <br><b>Your tickets will be confirmed once you do the payment through the payment gateway.<b> 
            //            <br><b>NOTE : Enter the same email ID on Payment Gateway portal which you entered while registering here.<b>`
            //     // Reference : https://www.w3schools.com/nodejs/nodejs_email.asp
            // };

            // transporter.sendMail(mailoptions, function (error, information) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         // console.log(information.reponse);
            //         // console.log(information);
            //         console.log("Mail sent to Sushil");
            //     }
            // });
            // // End Mail code 1

            // // Mail code 2

            // // transporter
            // var transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: 'sstechservices2311@gmail.com',
            //         pass: 'ankit@123'
            //     }
            // });

            // // mail information
            // var mailoptions = {
            //     from: 'sstechservices2311@gmail.com',
            //     to: usermail, // testing
            //     subject: 'Confirmation Mail',
            //     // text: 'Hello, testing mail ahead!!!'
            //     html: `
            //            <h2>Your details received are as follows:</h2>
            //            <table style="width: 100%;">
            //                <tr>
            //                    <td class="bg-secondary text-dark">First Name</td>
            //                    <td>${userfirstname}</td>
            //                </tr>
            //                <tr>
            //                    <td class="bg-secondary text-light">Last Name</td>
            //                    <td>${userlastname}</td>
            //                </tr>
            //                <tr>
            //                    <td class="bg-secondary text-light">E-mail ID</td>
            //                    <td>${usermail}</td>
            //                </tr>
            //                <tr>
            //                    <td class="bg-secondary text-light">Phone number</td>
            //                    <td>${userphone}</td>
            //                </tr>
            //            </table>
            //            <br><h4>From SS Tech</h4>
            //            <br>Do not reply to this mail. This is auto generated mail.`
            //     // Reference : https://www.w3schools.com/nodejs/nodejs_email.asp
            // };

            // transporter.sendMail(mailoptions, function (error, information) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         // console.log(information.reponse);
            //         // console.log(information);
            //         console.log("Mail Send to " + useremail);
            //     }
            // });
            // // End Mail code 2
            console.log("In users.js 3");
            dbObj.collection("logins").insertOne(dataObj, function (err, data) {

                if (err) {
                    console.log("err2 = " + err);
                } else {
                    console.log(data.insertedCount + " documents inserted");
                    dbData.close();

                    res.redirect('/users/login'); // try
                }
            })

        }

    });
});

console.log("In users.js 4");

module.exports = router;