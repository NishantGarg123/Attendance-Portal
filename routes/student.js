const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { Student, Teacher, Admin } = require("../models/college.js");
const methodOverride = require('method-override');
const { studentSchema } = require("../schema.js");

//========================================================================================================>>
// All validations

const validateStudent = (req, res, next) => {
    let { error } = studentSchema.validate(req.body);
    // console.log(result);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}
//========================================================================================================>>

//========================================================================>>
// Require all the Models
const {Enggmaths1 ,Physics, Electricals, Softskills1, Pps, Ai, Enggmaths2, Chemistry, Electronics, Mechanical, EmergingTech ,Softskills2} = require("../models/year1_DB.js")
const {Enggmaths4, Uhv, Coa, Dstl, Ds, Css, Ese, Tc, Toc, Mp, Os, Python} = require("../models/year2_DB.js");
const {Dbms, Cd, Daa, Wd, Hci, Constitution, Cn, Wt, Uhb, TraditionalCulture, Se, Dip } = require("../models/year3_DB.js");
const {Ml, Distribution, CloudComputing, Rd, Qm, DataWare} = require("../models/year4_DB.js");
//========================================================================>>
 
//========================================================================================================>>
// ALL ROTES OF STUDENT SIDE
router.get("/attendance", (req, res) => {
    res.render("home.ejs");
});

//Login route
router.get("/attendance/login", (req, res) => {
    res.render("login.ejs");
});

//login and redirect to presenttion route
router.post("/attendance/login", wrapAsync(async(req, res , next) => {
    let { email, pass } = req.body;
    const result = await Student.findOne({ email: email })
    if (result.password != pass) {
       next(new ExpressError(405 , "Invalid Credettials"));
    }
    else {
        res.render("student/student.ejs", { result });
    }                    
}));

//handle the route of subjects (this route will display the attendance of subjects of student).
router.get("/attendance/:id/:subjectName", wrapAsync(async(req, res , next) => {

    let { id, subjectName } = req.params;
    const subject = eval(subjectName);
    const result = await subject.find({ id: id });
    const teacherResult = await Teacher.find();
        res.render("student/subject.ejs", { result, subjectName , teacherResult });
}));

//create route
router.get("/attendance/create", (req, res) => {
    res.render("student/create.ejs");
});

//push data of new account
router.post("/attendance/create",validateStudent,wrapAsync(async(req, res , next) => {

    let student = req.body.Student;
    // console.log(student);
    const admin = await Admin.find({});
    const studPass = admin[0].studentPass;
    if (student.password != student.cpass) {
        next(new ExpressError(405 , "passwords and confirm password are not same"));
    }
    if (student.collegeid != studPass) {
        next(new ExpressError(405 , "Invalid Credentialities"));
    }
    else {                  
        delete student.cpass;
        delete student.collegeid;
        const new_student = new Student({
            ...student,
            created_at: new Date()
        });
        await new_student.save()
        res.redirect("/attendance/login");
    }
}));


//========================================================================================================>>

module.exports = router;