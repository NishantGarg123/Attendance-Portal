const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { Student, Teacher, Admin } = require("../models/college.js");
const methodOverride = require('method-override');
const { studentSchema, teacherSchema, adminSchame } = require("../schema.js");

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

const validateAdmin = (req, res, next) => {
    let { error } = adminSchame.validate(req.body);
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

//========================================================================================================>>
// ALL ROUTES OF ADMIN SIDE

//head route
router.get("/attendance/head", (req, res) => {
    res.render("head/login.ejs");
});

router.post("/attendance/head", wrapAsync(async (req, res, next) => {

    let { email, password } = req.body;
    const result = await Admin.findOne({ email: email })
    if (password != result.adminPass) {
        next(new ExpressError(405, "Invalid Credentials"));
    }
    else {
        //welcome to the our head showing all information
        res.render("head/TeacherStudent.ejs", { result });
    }
}));

router.post("/attendance/head/studentsInfo", wrapAsync(async (req, res, next) => {

    let { year } = req.body;
    let result = await Student.find({ year: year })
    res.render("head/AllYearStudent.ejs", { result, year });
}));

router.get("/attendance/head/teachersInfo", wrapAsync(async (req, res, next) => {

    let allTeachers = await Teacher.find({});
    res.render("head/AllTeacher.ejs", { allTeachers });
}));

//edit the student details
router.get("/attendance/head/studentsInfo/:id/edit", wrapAsync(async (req, res, next) => {

    let { id } = req.params;
    const result = await Student.findById(id)
    res.render("head/StudentEdit.ejs", { result });
}));

router.put("/attendance/head/studentsInfo/:id/edit", validateStudent, wrapAsync(async (req, res, next) => {

    let { id } = req.params;
    let student = req.body.Student;
    if (student.password != student.cpass) {
        next(new ExpressError(405, "password and confirm password are not match"));
    }
    else {
        delete student.cpass;
        delete student.collegeid;
        const result = await Student.findByIdAndUpdate(id, { ...student });
        res.render("head/StudentEdit.ejs", { result });
    }
}));

//delete the student
router.get("/attendance/head/studentsInfo/:id/delete", wrapAsync(async (req, res, next) => {

    let { id } = req.params;
    const result = await Student.findByIdAndDelete(id);
    res.send(" Student Deleted :", result);
}));

// Edit teacher details
router.get("/attendance/head/teachersInfo/:id/edit", wrapAsync(async (req, res, next) => {

    let { id } = req.params;
    let teacherDetails = await Teacher.findById(id);
    res.render("head/TeacherEdit.ejs", { teacherDetails });
}));

router.put("/attendance/head/teachersInfo/:id/edit", validateTeacher, wrapAsync(async (req, res, next) => {

    let { id } = req.params;
    let teacher = req.body.Teacher;
    if (teacher.password != teacher.cpassword) {
        next(new ExpressError(405, "password and confirm password are not match"));
    }
    else {
        delete teacher.cpassword;
        delete teacher.collegeid;
        await Teacher.findByIdAndUpdate(id, { ...teacher });
        res.redirect(`/attendance/head/teachersInfo/${id}/edit`);
    }
}));

// Delete the Teacher from DB
router.get("/attendance/head/teachersInfo/:id/delete", wrapAsync(async (req, res, next) => {

    let { id } = req.params;
    await Teacher.findOneAndDelete(id);
    res.send("Teacher Deleted from the DB");
}));

// Password Setting route
router.get("/attendance/head/passwordSetting", wrapAsync(async (req, res, next) => {

    let admin = await Admin.find({});
    admin = admin[0];
    res.render("head/PasswordSetting.ejs", { admin });
}));

router.put("/attendance/head/passwordSetting", validateAdmin, wrapAsync(async (req, res, next) => {

    let adminData = req.body.Admin;
    // console.log(adminData);
    await Admin.updateMany({ ...adminData });
    res.redirect("/attendance/head/passwordSetting");
}));
//========================================================================================================>>

module.exports = router;