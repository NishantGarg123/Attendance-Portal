const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { Student, Teacher, Admin } = require("../models/college.js");
const methodOverride = require('method-override');
const { teacherSchema } = require("../schema.js");

const passport = require('passport');
const {isLoggedIn} = require("../middleware.js");
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
// Require all the Models of cs
const {Enggmaths1 ,Physics, Electricals, Softskills1, Pps, Ai, Enggmaths2, Chemistry, Electronics, Mechanical, EmergingTech ,Softskills2} = require("../models/cs/year1_DB.js")

const {CSEnggmaths4, CSUhv, CSCoa, CSDstl, CSDs, CSCss, CSEse, CSTc, CSToc, CSMp, CSOs, CSPython} = require("../models/cs/year2_DB.js");
const {CSDbms, CSCd, CSDaa, CSWd, CSHci, CSConstitution, CSCn, CSWt, CSUhb, CSTraditionalCulture, CSSe, CSDip } = require("../models/cs/year3_DB.js");
const {CSMl, CSDistribution, CSCloudComputing, CSRd, CSQm, CSDataWare} = require("../models/cs/year4_DB.js");


// Require all the Models of ee
const {EEAnalogDevicesElectronicCircuits,EETechnicalCommunication,EEElectromagneticFieldTheory,EEElectricalMeasurementsInstrumentation,EEBasicSignalsSystems,EECyberSecurity
    ,EEMathsIV,EEUniversalHumanValues,EEDigitalElectronics,EEElectricalMachinesI,EENetworksAnalysisSynthesis,EEEnvironmentalScience} = require("../models/ee/year2_DB.js");
const {  EEPowerSystemI, EEControlSystem , EEElectricalMachinesII , EESensorsandTransducers , EENeuralNetworksFuzzySystem , EEConstitutionofIndia
    ,EEPowerSystemII , EEMicroprocessorandMicrocontroller , EEPowerElectronics  , EEDigitalControlSystem , EEOpenElectiveI , EEEssenceofIndianTraditionalKnowledge} =require("../models/ee/year3_DB.js");
const { EEHighVoltageEngineering , EEElectricdrives , EEOpenElectiveII , EEOpenElectiveIII , EEOpenElectiveIV} = require("../models/ee/year4_DB.js");


// Require all the Models of ec

const {ECMaterialScience, ECUniversalHumanValue ,ECElectronicDevices ,ECDigitalSystemDesign ,ECNetworkAnalysisAndSynthesis ,ECPythonProgramming  ,ECMiniProjectI ,ECMathsIV , ECtechnicalCommunication ,ECCommunicationEngineering ,ECAnalogCircuits ,ECSignalSystem ,ECComputerSystemSecurity} =require("../models/ec/year2_DB.js");
const {ECIntegratedCircuit ,ECMicroprocessorAndMicrocontroller , ECDigitalSignalProcessing , ECVlsiTechnology , ECElectronicsSwitching , ECConstitutionOfIndia , ECMiniProjectII , ECDigitalCommunication ,ECControlSystem, ECAntennaAndWavePRopagation, ECDataCommunicationNetwork ,ECUnderstandingHumanBeing ,ECIndianTradition} = require("../models/ec/year3_DB.js");
const {ECVlsiDesign ,ECRenewableEnergyResources ,ECWirelessAndMobileComminication ,ECRuralDevelopement ,ECProject  ,ECInternshipAssesment} =require("../models/ec/year4_DB.js");


// Require all the Models of me

const {MEElectronicsEngineering ,MEUniversalHumanValue, METhermodynamics, MEFluidMechanics, MEMaterialsEngineering, MEMiniProjectI, MEComputerSystemSecurity,  MEMathsIV,  METechnicalCommunication,  MEAppliedThermodynamics,  MEEnggMechanics, MEManufacturingProcesses, MEPythonProgramming } = require("../models/me/year2_DB.js");
const { MEHeatAndMassTransfer, MEStrengthOfMaterial, MEIndustrialEngg, MEComputerIntegratedManufacturing, MEAdvanceWelding, MEMiniProjectII, MEConstitutionOfIndia,   MERefrigerationAndAirConditioning, MEMachineDesign, METheoryOfMachine, MENonDestructiveTesting, MEUnderstandingHumanBeing, MEIndianTraditional } = require("../models/me/year3_DB.js");
const {MEProject , MEInternshipAssesment } = require("../models/me/year4_DB.js");

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
            const password = teacher.password;
            delete teacher.cpassword;
            delete teacher.collegeid;
            delete teacher.password;
            const new_teacher = new Teacher({
                ...teacher,
                created_at: new Date()
            });
            const registeredTeacher = await Teacher.register(new_teacher , password);
            
            req.login(registeredTeacher , (err)=>{
                if(err){
                    return next(err);   
                }                
                req.flash(`Welcome ${teacher.username}`);
                const result = req.user;
                res.render("teacher/teacher.ejs" , {result});
            });
        }
    }catch(err){
        req.flash("error" , err.message);
        res.redirect("/attendance/Tlogin");  
    }
    
}));

//login route display the years in option
router.post("/attendance/Tlogin", 
    passport.authenticate('teacher-local',{failureRedirect:"/attendance/Tlogin" , failureFlash:true,}),async(req, res ) => {
        // console.log(req.user);        
        const result = req.user;
        req.flash("success" , `Welcome ${req.user.username}`);
        res.render("teacher/teacher.ejs" , {result});
});

//subject displaying route according to the year
router.post("/attendance/:id",wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let { year , branch } = req.body;
    const result = await Teacher.findOne({ _id: id })

    res.render(`teacher/${branch}/subjects.ejs`, { result, year , branch });
}));


//mark attendance page(displaying the name of student)

router.get("/attendance/:year/:id/:branch/:subjectname", wrapAsync(async (req, res, next) => {

    let { id, year,branch , subjectname } = req.params;

    const teacher = await Teacher.findOne({ _id: id });
    if (teacher._id != id) {
        next(new ExpressError(405, "Invalid Ecredetials"));
    }
    else {
        const result = await Student.find({ year: year , branch:branch });
        // console.log(result);
        res.render("teacher/mark.ejs", { subjectname, result, id, year , branch });
    }
}));

// POST request handle karne ke liye route define karna
router.post("/attendance/:year/:id/:branch/:subjectname", wrapAsync(async (req, res, next) => {

    let { id, subjectname, year , branch } = req.params;
    let { student } = req.body;                   // 'student' input field ka name hai
    const subject_name = eval(subjectname);
    const result = await Student.find({ year: year , branch:branch });
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