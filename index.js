//========================================================================>>
const mongoose = require('mongoose');
const express = require('express');
const { type } = require('os');
const app = express();
const port = 8080;
const methodOverride = require('method-override');
const ExpressError = require("./utils/ExpressError.js");

//session related
const session = require("express-session");
const flash = require('connect-flash');


const { Student, Teacher , Admin } = require("./models/college.js");
///passport related
const passport = require('passport');
const LocalStrategy = require('passport-local')

//========================================================================>>
//foe ejs-mate 
const ejsMate = require("ejs-mate");
app.engine('ejs',ejsMate);
//========================================================================>>
path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//========================================================================>>
const { log } = require('console');
//========================================================================>>


//========================================================================>>
// Session and flash related conseptes
const sessionOption ={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly:true
    }
}
app.use(session(sessionOption));

app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use('student-local', new LocalStrategy(Student.authenticate()));
passport.use('teacher-local', new LocalStrategy(Teacher.authenticate()));
// passport.use('admin-local', new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());

//creating the locals variable so that we can access in the ejs templates.
app.use((req , res , next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

//========================================================================>>

 // Require the all rotes
 const adminRoute = require("./routes/head.js");
 const studentRoute = require("./routes/student.js");
 const teacherRoute = require("./routes/teacher.js");

 //Using all route
app.use(adminRoute);
app.use(studentRoute);
app.use(teacherRoute);
//========================================================================>>

//========================================================================>>
//middleware for express error

app.all("*", (req , res , next)=>{

    next(new ExpressError(404 , "page not found"));
});

app.use((err , req , res , next)=>{

    let {statusCode = 500 , message = "Page noe found "} = err;
    res.status(statusCode).send(message);

});

//========================================================================>>

//========================================================================>>
app.listen(port, () => {
    console.log(`connected to the pot ${port}`);
})

//========================================================================>>