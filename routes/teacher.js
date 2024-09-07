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

//create route
router.get("/attendance/Tcreate", (req, res) => {
    //render the form to teacher
    res.render("teacher/create.ejs");
});

router.post("/attendance/Tcreate", validateTeacher, wrapAsync(async (req, res, next) => {

    let teacher = req.body.Teacher;
    const admin = await Admin.find({});
    const teachPass = admin[0].teacherPass;
    if (teacher.password != teacher.cpassword) {
        next(new ExpressError(405, "password and confirm password are not match"));
    }
    else if (teacher.collegeid != teachPass) {
        next(new ExpressError(405, "Invalid Credentialities"));
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
}));

//login route display the years in option
router.post("/attendance/Tlogin", wrapAsync(async (req, res, next) => {
    let { email, pass } = req.body;
    const result = await Teacher.findOne({ email: email });
    if (result.password != pass) {
        next(new ExpressError(405, "Invalid Credentials"));
    }
    else {
        res.render("teacher/teacher.ejs", { result });
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
        res.render("teacher/mark.ejs", { subjectname, result, id, year });
    }
}));

// POST request handle karne ke liye route define karna
router.post("/attendance/:year/:id/:subjectname", wrapAsync(async (req, res, next) => {

    let { id, subjectname, year } = req.params;
    const { student } = req.body;                   // 'student' input field ka name hai
    const subject_name = eval(subjectname);

    const result = await Student.find({ year: year });

    const attendance = result.map(el => {
        let current_id = (el.id).toString();
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
    res.send("Attendance marked successfully");
}));
//========================================================================>>

module.exports = router;