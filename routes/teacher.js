const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { Student, Teacher, Admin } = require("../models/college.js");
const methodOverride = require('method-override');
const { teacherSchema } = require("../schema.js");

//========================================================================================================>>
// All validations
const validateTeacher = (req, res, next) => {
    let { error } = teacherSchema.validate(req.body);
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
//ALL ROUTE OF TEACHER SIDE

//Login route
router.get("/attendance/Tlogin", (req, res) => {
    res.render("teacher/login.ejs");
});

//create route
router.get("/attendance/Tcreate", (req, res) => {
    //render the form to teacher
    res.render("teacher/create.ejs");
});

router.post("/attendance/Tcreate", validateTeacher, wrapAsync(async (req, res, next) => {
    try{
        let teacher = req.body.Teacher;
        const admin = await Admin.find({});
        const teachPass = admin[0].teacherPass;
        if (teacher.password != teacher.cpassword) {
            // next(new ExpressError(405, "password and confirm password are not match"));
            req.flash("error","passwords and confirm password are not same");
            res.redirect("/attendance/Tcreate");
        }
        else if (teacher.collegeid != teachPass) {
            // next(new ExpressError(405, "Invalid Credentialities"));
             req.flash("error","College Id password is Invalid");
            res.redirect("/attendance/Tcreate");
        }
        else {
            delete teacher.cpassword;
            delete teacher.collegeid;
            const new_teacher = new Teacher({
                ...teacher,
                created_at: new Date()
            });
    
            await new_teacher.save();
            res.redirect("/attendance/login");
        }
    }catch(err){
        req.flash("success" , err.message);
        res.redirect("/attendance/Tlogin");  
    }
    
}));

//login route display the years in option
router.post("/attendance/Tlogin", wrapAsync(async (req, res, next) => {
    try{
        let { email, pass } = req.body;
        const result = await Teacher.findOne({ email: email });
        if (!result || (result.password != pass)) {
            //    next(new ExpressError(405 , "Invalid Credettials"));
                req.flash("error" , "Invalid Credettials");
                res.redirect("/attendance/Tlogin");  
            }
        else {
            res.render("teacher/teacher.ejs", { result });
        }
    }catch(err){
        req.flash("success" , err.message);
        res.redirect("/attendance/Tlogin");  
    }
    
}));

//subject displaying route according to the year
router.post("/attendance/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let { year } = req.body;
    const result = await Teacher.findOne({ _id: id })
    res.render("teacher/subjects.ejs", { result, year });
}));


//mark attendance page(displaying the name of student)

router.get("/attendance/:year/:id/:subjectname", wrapAsync(async (req, res, next) => {

    let { id, year, subjectname } = req.params;

    const teacher = await Teacher.findOne({ _id: id });
    if (teacher._id != id) {
        next(new ExpressError(405, "Invalid Ecredetials"));
    }
    else {
        const result = await Student.find({ year: year });
        // console.log(result);
        res.render("teacher/mark.ejs", { subjectname, result, id, year });
    }
}));

// POST request handle karne ke liye route define karna
router.post("/attendance/:year/:id/:subjectname", wrapAsync(async (req, res, next) => {

    let { id, subjectname, year } = req.params;
    let { student } = req.body;                   // 'student' input field ka name hai
    const subject_name = eval(subjectname);
    const result = await Student.find({ year: year });
    if(student === undefined)
    {
        student=[{_id:0}];
        const attendance = result.map(el => {
            let current_id = (el._id).toString();
            return {
                id: el._id,
                date: new Date(),
                present: student.includes(current_id),
                marked_by: id
            };
        });
        await subject_name.insertMany(
            attendance
        )
    }
    
    else
    {  
        const attendance = result.map(el => {
            let current_id = (el._id).toString();
            return {
                id: el._id,
                date: new Date(),
                present: student.includes(current_id),
                marked_by: id
            };
        });
    
        await subject_name.insertMany(
            attendance
        )
    }
    res.send("Attendance marked successfully");
}));
//========================================================================>>

module.exports = router;