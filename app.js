"use strict"

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");




var ejs = require("ejs");

const router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.engine("ejs",require("ejs").__express);

const session = require("express-session");
app.use(session({secret:"secret",saveUninitialized:true,resave:true}));
var sess;

router.get("/",function(req,res){
    sess = req.session;
    res.render("index",{pagename:"Home",sess:sess});
})

router.get("/about",function(req,res){
    sess = req.session;
    res.render("about",{pagename:"About",sess:sess});
})

router.get("/register",function(req,res){
    sess = req.session;
    res.render("register",{pagename:"Register",sess:sess});
})
router.get("/register_success",function(req,res){
    sess = req.session;
    res.render("register_sucess",{pagename:"Register",sess:sess});
})

router.get("/profile",function(req,res){
    sess = req.session;
    if(typeof(sess) == "undefined" || sess.loggedin == false){
        var errors = ["Not a authenticated user"];
        res.render("index",{pagename:"Home",errors:errors})
    }else{
        res.render("profile",{pagename:"Profile",sess:sess})
    }
})

router.get("/logout",function(req,res){
    sess = req.session;
    sess.destroy(function(err){
        res.redirect("/");
    })
})

router.post("/login",function(req,res){
    var errors = [];
    if(req.body.email == ""){
        errors.push("Email is required");
    }
    else if(req.body.email == "" && !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(req.body.email)){
        errors.push("Email is not valid");
    }
    else if(req.body.password == ""){
        errors.push("Password is required");
    }
    else if(req.body.password == "" && !/^[a-zA-Z]\w(3,14)$/.test(req.body.password)){
        errors.push("Password is not valid");
    }
    if(req.body.email.toLowerCase() == "mike@aol.com" && req.body.password == "abc123"){
        sess = req.session;
        sess.loggedin = true;
        res.render("profile",{pagename:"Profile",sess:sess});
    }else{
        errors.push("Login is invalid");
        res.render("index",{pagename:"Home",errors:errors});
    }
    
})

router.post("/register",function(req,res){
    
    var errors = [];
    //console.log(req.body)
    if(req.body.inputFirst == ""){
        errors.push("First Name is required");
    }
    else if(req.body.inputFirst != "" && !/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i.test(req.body.inputFirst)){
        errors.push("First Name is not valid");
    }
    else if(req.body.inputLast == ""){
        errors.push("Last Name is required");
    }
    else if(req.body.inputLast != "" && !/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i.test(req.body.inputLast)){
        errors.push("Last Name is not valid");
    }
    else if(req.body.inputAddress == ""){
        errors.push("Address is required");
    }
    else if(req.body.inputAddress != "" && !/\d{1,5}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}\s?[a-zA-Z]{2,15}/.test(req.body.inputAddress)){
        errors.push("Address is not valid.");
    }
    else if(req.body.inputCity == ""){
        errors.push("City is required");
    }
    else if(req.body.inputCity != "" && !/^[a-zA-Z',.\s-]{1,25}$/.test(req.body.inputCity)){
        errors.push("City is not valid.");
    }
    else if(req.body.inputState == "Choose..."){
        errors.push("State is required");
    }
    else if(req.body.inputZip == ""){
        errors.push("Zipcode is required");
    }
    else if(req.body.inputZip != "" && !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(req.body.inputZip)){
        errors.push("Zipcode is not valid.");
    }
    else if(req.body.inputAge == "Choose..."){
        errors.push("Age is required");
    }
    else if(req.body.inputMale != "on" && req.body.inputFemale != "on"){
        errors.push("Gender is required");
    }
    else if(req.body.inputBio == ""){
        errors.push("A Bio is required");
    }
    else if(req.body.inputConsent != "on"){
        errors.push("Please consent to the terms and conditions to register");
    }
    //console.log(errors);
    if(errors != ""){
        res.render("register",{pagename:"Register",errors:errors});
    }
    else{
        res.render("register_success",{pagename:"Register"});
    }
})

app.use(express.static("public"));
app.use("/",router);
var server = app.listen("8080");