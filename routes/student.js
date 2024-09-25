const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { Student, Teacher, Admin } = require("../models/college.js");
const methodOverride = require('method-override');
const { studentSchema } = require("../schema.js");
const {isLoggedIn} = require('../middleware.js');
const passport = require('passport');
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

const firstYear = ["Enggmaths1" ,"Physics", "Electricals"," Softskills1"," Pps"," Ai", "Enggmaths2", "Chemistry", "Electronics", "Mechanical", "EmergingTech" ,"Softskills2"];
const secondYear = ["Enggmaths4", "Uhv", "Coa"," Dstl"," Ds", "Css", "Ese", "Tc", "Toc", "Mp", "Os", "Python"];
const thirdYear = ["Dbms", "Cd", "Daa", "Wd", "Hci", "Constitution", "Cn", "Wt", "Uhb", "TraditionalCulture", "Se"," Dip"];
const fourthYear = ["Ml", "Distribution", "CloudComputing"," Rd"," Qm"," DataWare"];
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
router.post("/attendance/login", 
    passport.authenticate('student-local',{failureRedirect:"/attendance/login" , failureFlash:true,}),async(req, res ) => {
    req.flash("success" , `Welcome ${req.user.username}`);
    res.redirect("/attendance/dashboard");
});

router.get("/attendance/dashboard" ,isLoggedIn , wrapAsync(async(req , res , next )=>{
    
    if(req.user.workingExperience)
    {
        console.log('vcjsh');
        
        const result = req.user;
        res.render("teacher/teacher.ejs" , {result});

    }
    else{
            const year =req.user.year;
            let att=[];
            const id = (req.user._id).toString();
            if(year == 1){
                for(sub of firstYear){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});
                att= att.concat(res);
                }
            }
            if(year == 2){
                for(sub of secondYear){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});
                att= att.concat(res);
                }
            }
            if(year == 3){
                for(sub of thirdYear){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});
                att= att.concat(res);
                }
            }
            if(year == 4){
                for(sub of fourthYear){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});            
                att= att.concat(res);
                }
            }
            const result = req.user;
            res.render("student/student.ejs", { result ,att });
    }
}));

//handle the route of subjects (this route will display the attendance of subjects of student).
router.get("/attendance/:id/:subjectName",isLoggedIn, wrapAsync(async(req, res , next) => {

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
try{
    let student = req.body.Student;
    // console.log(student);
    const admin = await Admin.find({});
    const studPass = admin[0].studentPass;
    if (student.password != student.cpass) {
        // next(new ExpressError(405 , "passwords and confirm password are not same"));
        req.flash("error","passwords and confirm password are not same");
        res.redirect("/attendance/create");
    }
    if (student.collegeid != studPass) {
        // next(new ExpressError(405 , "Invalid Credentialities"));
        req.flash("error","College Id password is Invalid");
        res.redirect("/attendance/create");
    }
    else {                  
        const password = student.password;
        delete student.cpass;
        delete student.collegeid;
        delete student.password;
        const new_student = new Student({
            ...student,
            created_at: new Date()
        });
        const registeredStudent = await Student.register(new_student , password);
        req.login(registeredStudent , (err)=>{
            if(err){
                return next(err);   
            }
            req.flash(`Welcome ${student.username}`);
            res.redirect("/attendance/dashboard");
        })
    }
}catch(err){
    req.flash("success" , err.message);
    res.redirect("/attendance/login");  
}
   
}));


router.get("/attendance/logout" , (req , res , next )=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success" , "You are logged out");
        res.redirect("/attendance");
    })
});

//========================================================================================================>>

module.exports = router;