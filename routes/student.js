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
// Require all the Models cs
const {Enggmaths1 ,Physics, Electricals, Softskills1, Pps, Ai, Enggmaths2, Chemistry, Electronics, Mechanical, EmergingTech ,Softskills2} = require("../models/cs/year1_DB.js")

const {CSEnggmaths4, CSUhv, CSCoa, CSDstl, CSDs, CSCss, CSEse, CSTc, CSToc, CSMp, CSOs, CSPython} = require("../models/cs/year2_DB.js");
const {CSDbms, CSCd, CSDaa, CSWd, CSHci, CSConstitution, CSCn, CSWt, CSUhb, CSTraditionalCulture, CSSe, CSDip } = require("../models/cs/year3_DB.js");
const {CSMl, CSDistribution, CSCloudComputing, CSRd, CSQm, CSDataWare} = require("../models/cs/year4_DB.js");

const cs = [
    ["Enggmaths1" ,"Physics", "Electricals"," Softskills1"," Pps"," Ai", "Enggmaths2", "Chemistry", "Electronics", "Mechanical", "EmergingTech" ,"Softskills2"],
    
    ["CSEnggmaths4", "CSUhv", "CSCoa"," CSDstl"," CSDs", "CSCss", "CSEse", "CSTc", "CSToc", "CSMp", "CSOs", "CSPython"],
    ["CSDbms", "CSCd", "CSDaa", "CSWd", "CSHci", "CSConstitution", "CSCn", "CSWt", "CSUhb", "CSTraditionalCulture", "CSSe"," CSDip"],
    ["CSMl", "CSDistribution", "CSCloudComputing"," CSRd"," CSQm"," CSDataWare"]];

// Require all the Models of ee
const {EEAnalogDevicesElectronicCircuits,EETechnicalCommunication,EEElectromagneticFieldTheory,EEElectricalMeasurementsInstrumentation,EEBasicSignalsSystems,EECyberSecurity
    ,EEMathsIV,EEUniversalHumanValues,EEDigitalElectronics,EEElectricalMachinesI,EENetworksAnalysisSynthesis,EEEnvironmentalScience} = require("../models/ee/year2_DB.js");
const {  EEPowerSystemI, EEControlSystem , EEElectricalMachinesII , EESensorsandTransducers , EENeuralNetworksFuzzySystem , EEConstitutionofIndia
    ,EEPowerSystemII , EEMicroprocessorandMicrocontroller , EEPowerElectronics  , EEDigitalControlSystem , EEOpenElectiveI , EEEssenceofIndianTraditionalKnowledge} =require("../models/ee/year3_DB.js");
const { EEHighVoltageEngineering , EEElectricdrives , EEOpenElectiveII , EEOpenElectiveIII , EEOpenElectiveIV} = require("../models/ee/year4_DB.js");

const ee = [
   ["Enggmaths1" ,"Physics", "Electricals"," Softskills1"," Pps"," Ai", "Enggmaths2", "Chemistry", "Electronics", "Mechanical", "EmergingTech" ,"Softskills2"],
   ["EEAnalogDevicesElectronicCircuits","EETechnicalCommunication","EEElectromagneticFieldTheory","EEElectricalMeasurementsInstrumentation","EEBasicSignalsSystems","EECyberSecurity" ,"EEMathsIV","EEUniversalHumanValues","EEDigitalElectronics","EEElectricalMachinesI","EENetworksAnalysisSynthesis","EEEnvironmentalScience"],
   ["EEPowerSystemI"," EEControlSystem" ," EEElectricalMachinesII" ," EESensorsandTransducers" ," EENeuralNetworksFuzzySystem" , "EEConstitutionofIndia"
       ,"EEPowerSystemII" , "EEMicroprocessorandMicrocontroller" ," EEPowerElectronics"  ," EEDigitalControlSystem" , "EEOpenElectiveI" , "EEEssenceofIndianTraditionalKnowledge"],
   [ "EEHighVoltageEngineering" , "EEElectricdrives" , "EEOpenElectiveII ", "EEOpenElectiveIII ", "EEOpenElectiveIV"]
];

// Require all the Models of ec

const {ECMaterialScience, ECUniversalHumanValue ,ECElectronicDevices ,ECDigitalSystemDesign ,ECNetworkAnalysisAndSynthesis ,ECPythonProgramming  ,ECMiniProjectI ,ECMathsIV , ECtechnicalCommunication ,ECCommunicationEngineering ,ECAnalogCircuits ,ECSignalSystem ,ECComputerSystemSecurity} =require("../models/ec/year2_DB.js");
const {ECIntegratedCircuit ,ECMicroprocessorAndMicrocontroller , ECDigitalSignalProcessing , ECVlsiTechnology , ECElectronicsSwitching , ECConstitutionOfIndia , ECMiniProjectII , ECDigitalCommunication ,ECControlSystem, ECAntennaAndWavePRopagation, ECDataCommunicationNetwork ,ECUnderstandingHumanBeing ,ECIndianTradition} = require("../models/ec/year3_DB.js");
const {ECVlsiDesign ,ECRenewableEnergyResources ,ECWirelessAndMobileComminication ,ECRuralDevelopement ,ECProject  ,ECInternshipAssesment} =require("../models/ec/year4_DB.js");

const ec= [
    ["Enggmaths1" ,"Physics", "Electricals"," Softskills1"," Pps"," Ai", "Enggmaths2", "Chemistry", "Electronics", "Mechanical", "EmergingTech" ,"Softskills2"],
    ["ECMaterialScience", "ECUniversalHumanValue" ,"ECElectronicDevices" ,"ECDigitalSystemDesign ","ECNetworkAnalysisAndSynthesis" ,"ECPythonProgramming"  ,"ECMiniProjectI" ,"ECMathsIV" , "ECtechnicalCommunication" ,"ECCommunicationEngineering ","ECAnalogCircuits" ,"ECSignalSystem" ,"ECComputerSystemSecurity"],
    ["ECIntegratedCircuit" ,"ECMicroprocessorAndMicrocontroller" ," ECDigitalSignalProcessing" ," ECVlsiTechnology" ," ECElectronicsSwitching" ," ECConstitutionOfIndia" ," ECMiniProjectII" ," ECDigitalCommunication" ,"ECControlSystem", "ECAntennaAndWavePRopagation", "ECDataCommunicationNetwork" ,"ECUnderstandingHumanBeing" ,"ECIndianTradition"],
    ["ECVlsiDesign" ,"ECRenewableEnergyResources" ,"ECWirelessAndMobileComminication" ,"ECRuralDevelopement ","ECProject"  ,"ECInternshipAssesment"]
];

// Require all the Models of me

const {MEElectronicsEngineering ,MEUniversalHumanValue, METhermodynamics, MEFluidMechanics, MEMaterialsEngineering, MEMiniProjectI, MEComputerSystemSecurity,  MEMathsIV,  METechnicalCommunication,  MEAppliedThermodynamics,  MEEnggMechanics, MEManufacturingProcesses, MEPythonProgramming } = require("../models/me/year2_DB.js");
const { MEHeatAndMassTransfer, MEStrengthOfMaterial, MEIndustrialEngg, MEComputerIntegratedManufacturing, MEAdvanceWelding, MEMiniProjectII, MEConstitutionOfIndia,   MERefrigerationAndAirConditioning, MEMachineDesign, METheoryOfMachine, MENonDestructiveTesting, MEUnderstandingHumanBeing, MEIndianTraditional } = require("../models/me/year3_DB.js");
const {MEProject , MEInternshipAssesment } = require("../models/me/year4_DB.js");

const me = [
    ["Enggmaths1" ,"Physics", "Electricals"," Softskills1"," Pps"," Ai", "Enggmaths2", "Chemistry", "Electronics", "Mechanical", "EmergingTech" ,"Softskills2"],
    ["MEElectronicsEngineering"," MEUniversalHumanValue" , " METhermodynamics" , " MEFluidMechanics" , " MEMaterialsEngineering" ," MEMiniProjectI" ," MEComputerSystemSecurity", " MEMathsIV" , " METechnicalCommunication" , "MEAppliedThermodynamics" ,  "MEEnggMechanics" , " MEManufacturingProcesses" , " MEPythonProgramming" ],
    ["MEHeatAndMassTransfer", " MEStrengthOfMaterial" ," MEIndustrialEngg" ," MEComputerIntegratedManufacturing" , " MEAdvanceWelding" , "MEMiniProjectII","  MEConstitutionOfIndia","   MERefrigerationAndAirConditioning"," MEMachineDesign " , "METheoryOfMachine"," MENonDestructiveTesting"," MEUnderstandingHumanBeing" ," MEIndianTraditional" ],
    [ "MEProject" ," MEInternshipAssesment"]
];


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

            let branch = req.user.branch;
            if(branch == 'cs'){
                branch = cs;
            }else if(branch == 'ee'){
                branch = ee;
            }else if(branch == 'ec'){
                branch = ec;
            }else if(branch == 'me'){
                branch = me;
            }

            if(year == 1){
                for(sub of (branch)[0] ){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});
                att= att.concat(res);
                }
            }
            if(year == 2){
                for(sub of (branch)[1]){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});
                att= att.concat(res);
                }
            }
            if(year == 3){
                for(sub of (branch)[2]){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});
                att= att.concat(res);
                }
            }
            if(year == 4){
                for(sub of (branch)[3] ){
                    const currSub = eval(sub);
                    let res = await currSub.find({id:id});            
                att= att.concat(res);
                }
            }          
            const result = req.user;
            const Stud_branch = req.user.branch;
            res.render(`student/${Stud_branch}/student.ejs`, { result ,att });
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