//========================================================================>>
const mongoose = require('mongoose');
const express = require('express');
const { type } = require('os');
const app = express();
const port = 8080;
const methodOverride = require('method-override');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
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




//========================================================================>>
//DB connections
const year12024 = mongoose.createConnection('mongodb://127.0.0.1:27017/year12024');
const year22024 = mongoose.createConnection('mongodb://127.0.0.1:27017/year22024');
const year32024 = mongoose.createConnection('mongodb://127.0.0.1:27017/year32024');
const year42024 = mongoose.createConnection('mongodb://127.0.0.1:27017/year42024');

const college2024 = mongoose.createConnection('mongodb://127.0.0.1:27017/college2024');
//========================================================================>>



//========================================================================>>
//Schema of tables
const studentPresentSchema =new mongoose.Schema({

    id: {
        type: String,
        require: true
    },
    date:
    {
        type: Date,
        require: true
    },
    present: {
        type: Boolean,
        require: true
    },
    marked_by: {
        type: String,
        require: true
    }
});
//schema of student
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    last: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        
    },
    year: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    created_at: {
        type: String
    }
});
//Teacher Schema
const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        
    },
    dob: {
        type: String,
        require: true
    },
    created_at: {
        type: String
    },
    workingExperience: {
        type: String
    }
});
//========================================================================>>




//========================================================================>>
//models of DB
//year 1
// Enggmaths1 Physics Electricals Softskills1 Pps Ai Enggmaths2 Chemistry Electronics Mechanical EmergingTech

const Enggmaths1 = year12024.model("Enggmaths1", studentPresentSchema);
const Physics = year12024.model("Physics", studentPresentSchema);
const Electricals = year12024.model("Electricals", studentPresentSchema);
const Softskills1 = year12024.model("Softskills1", studentPresentSchema);
const Pps = year12024.model("Pps", studentPresentSchema);
const Ai = year12024.model("Ai", studentPresentSchema);

const Enggmaths2 = year12024.model("Enggmaths2", studentPresentSchema);
const Chemistry = year12024.model("Chemistry", studentPresentSchema);
const Electronics = year12024.model("Electronics", studentPresentSchema);
const Softskills2 = year12024.model("Softskills2", studentPresentSchema);
const Mechanical = year12024.model("Mechanical", studentPresentSchema);
const EmergingTech = year12024.model("EmergingTech", studentPresentSchema);

//year2
// Enggmaths4 Uhv Coa Dstl Ds Css Ese Tc Toc Mp Os Python

const Enggmaths4 = year22024.model("Enggmaths4", studentPresentSchema);
const Uhv = year22024.model("Uhv", studentPresentSchema);
const Coa = year22024.model("Coa", studentPresentSchema);
const Dstl = year22024.model("Dstl", studentPresentSchema);
const Ds = year22024.model("Ds", studentPresentSchema);
const Css = year22024.model("Css", studentPresentSchema);

const Ese = year22024.model("Ese", studentPresentSchema);
const Tc = year22024.model("Tc", studentPresentSchema);
const Toc = year22024.model("Toc", studentPresentSchema);
const Mp = year22024.model("Mp", studentPresentSchema);
const Os = year22024.model("Os", studentPresentSchema);
const Python = year22024.model("Python", studentPresentSchema);

//year3
// Dbms Cd Daa Wd Hci Constitution Cn Wt Uhb TraditionalCulture Se Dip 

const Dbms = year32024.model("Dbms", studentPresentSchema);
const Cd = year32024.model("Cd", studentPresentSchema);
const Daa = year32024.model("Daa", studentPresentSchema);
const Wd = year32024.model("Wd", studentPresentSchema);
const Hci = year32024.model("Hci", studentPresentSchema);
const Constitution = year32024.model("Constitution ", studentPresentSchema);

const Cn = year32024.model("Cn", studentPresentSchema);
const Wt = year32024.model("Wt", studentPresentSchema);
const Uhb = year32024.model("Uhb", studentPresentSchema);
const TraditionalCultuer = year32024.model("TraditionalCultuer", studentPresentSchema);
const Se = year32024.model("Se", studentPresentSchema);
const Dip = year32024.model("Dip", studentPresentSchema);

//year 4
// ml  Distribution CloudComputing Rd Qm DataWare
const Ml = year42024.model("Ml", studentPresentSchema);
const Distribution = year42024.model("Distribution", studentPresentSchema);
const Qm = year42024.model("Qm", studentPresentSchema);
const Rd = year42024.model("Rd", studentPresentSchema);
const DataWare = year42024.model("DataWare", studentPresentSchema);
const CloudComputing = year42024.model("CloudComputing", studentPresentSchema);




//student model
const Student = college2024.model("Student", studentSchema);
const Teacher = college2024.model("Teacher", TeacherSchema);

const AdminSchema =new mongoose.Schema({
    name:{
      type:String,
      require:true
    },
    email:{
        type:String,
        require:true
    },
    adminPass:{
        type:String,
        require:true
    },
    studentPass:{
        type:String,
        require:true
    },
    teacherPass:{
        type:String,
        require:true
    }
});

const  Head_Teacher = college2024.model("Head_Teacher", AdminSchema);
const { log } = require('console');

//========================================================================>>
// const Admin = async()=>{

//     const admin = new Head_Teacher({
//         name:"nishant garg",
//         email:"gargacsnishant@gmail.com",
//         adminPass:"9105060079",
//         studentPass:"7088177858",
//         teacherPass:"9758674359"
//     });
//     await admin.save();
// }
// Admin();

//========================================================================>>


//########################################################################################################
//All route
        //Root port
        app.get("/", (req, res , next) => {
                // next();
        });


    //########################################################################################################
    //All head route
    
        //========================================================================================================>>
        //head route
        app.get("/attendance/head",(req , res)=>{
            res.render("head/login.ejs");
        });

        app.post("/attendance/head",(req , res)=>{

            let {email , password } = req.body;
            // console.log(email);
            Head_Teacher.findOne({email:email})
            .then(result=>{
                
                if(password != result.adminPass)
                {
                    const err= "Password or email is wrong";
                    res.render("error.ejs",{err});    
                }
                else
                {
                    //welcome to the our head showing all information
                        res.render("head/TeacherStudent.ejs",{result});
                }
            })
            .catch(err=>{
                res.render("error.ejs",{err});
            })
        });

        app.post("/attendance/head/studentsInfo",(req , res)=>{

            let {year} = req.body;
            Student.find({year:year})
            .then(result=>{
                res.render("head/AllYearStudent.ejs",{result, year});
            })
            .catch(err=>{
                res.render("error.ejs",{err});
            })    
        });

        app.get("/attendance/head/teachersInfo", async(req , res)=>{

            let allTeachers = await Teacher.find({});            
            res.render("head/AllTeacher.ejs" , {allTeachers});
        });
        //========================================================================================================>>

        
        //========================================================================================================>>
        //edit the student details
        app.get("/attendance/head/studentsInfo/:id/edit",(req , res)=>{

            let {id} = req.params;
            Student.findById(id)
            .then(result=>{
                res.render("head/StudentEdit.ejs",{result});
            })
            .catch(err=>{
                res.render("error.ejs",{err});
            });

        })

        app.put("/attendance/head/studentsInfo/:id/edit",wrapAsync( async(req , res)=>{

            let {id} = req.params;
            let student = req.body.student;
            await Student.findByIdAndUpdate(id, {...student});
            res.redirect(`/attendance/head/studentsInfo/${id}/edit`);
        }));
        //========================================================================================================>>

        //========================================================================================================>>
        //delete the student
        app.get("/attendance/head/studentsInfo/:id/delete",async(req , res)=>{

            let {id } = req.params;
            await Student.findByIdAndDelete(id);
            res.send(" Student Deleted");
        });
        //========================================================================================================>>

        
        //========================================================================================================>>
        // Edit teacher details
        app.get("/attendance/head/teachersInfo/:id/edit" , async(req , res )=>{

            let {id} = req.params;
            let teacherDetails = await Teacher.findById(id);
            res.render("head/TeacherEdit.ejs" , {teacherDetails});
        });

        app.put("/attendance/head/teachersInfo/:id/edit" , async(req , res )=>{

            let {id} = req.params;
            let teacher = req.body.teacher;
            await Teacher.findByIdAndUpdate(id , {...teacher});
            res.redirect(`/attendance/head/teachersInfo/${id}/edit`);
        });

        //========================================================================================================>>

        //========================================================================================================>>
        // Delete the Teacher from DB
        app.get("/attendance/head/teachersInfo/:id/delete" , async(req , res)=>{

            let {id}  = req.params;
            await Teacher.findOneAndDelete(id);
            res.send("Teacher Deleted from the DB");

        });
        //========================================================================================================>>

        //========================================================================================================>>
        // Password Setting route
        app.get("/attendance/head/passwordSetting" , async(req , res)=>{

            let admin = await Head_Teacher.find({});
            admin = admin[0];
            // console.log(admin);
            
            res.render("head/PasswordSetting.ejs",{admin});
        });

        app.put("/attendance/head/passwordSetting" , async(req , res)=>{

            let adminData = req.body.admin;
            await Head_Teacher.updateMany({...adminData});
            res.redirect("/attendance/head/passwordSetting");

        });
        //========================================================================================================>>

    //########################################################################################################



    //########################################################################################################
            
        //home route
        app.get("/attendance", (req, res) => {
            res.render("home.ejs");
        });
        //########################################################################################################

        //########################################################################################################
        //Login route
        app.get("/attendance/login", (req, res) => {
            res.render("login.ejs");
        });
        //login and redirect to presenttion route
        app.post("/attendance/login", (req, res) => {
            let { email, pass } = req.body;
            Student.findOne({ email: email })
                .then(result => {
                    if (result.password != pass) {
                        let err = "password or email does not matched";
                        res.render("error.ejs", { err });
                    }
                    else {
                        // const year = result.year;
                        // const collctions = "collctions"+year;
                        // console.log(collctions);                
                        // // const collectionsName = eval(collctions);
                        // console.log(typeof(collections));
                        


                        res.render("student/student.ejs", { result });
                    }
                })
                .catch(err => {
                    res.render("error.ejs", { err });
                });
        });
        //########################################################################################################



        //========================================================================>>
        //handle the route of subjects (this route will display the attendance of subjects of student).
        app.get("/attendance/:id/:subjectName", (req, res) => {

            let { id, subjectName } = req.params;
            const subject = eval(subjectName);
            subject.find({ id: id })
                .then(result => {

                    Teacher.find()
                    .then(teacherResult=>{

                        // res.send(result);
                        res.render("student/subject.ejs", { result, subjectName , teacherResult });
                    })
                    .catch(err=>{
                        res.render("error.ejs",{err});
                    })
                            
                })
                .catch(err => {
                    res.render("error.ejs", { err });
                });
        });

        //========================================================================>>


        //########################################################################################################
        //create route
        app.get("/attendance/create", (req, res) => {
            res.render("student/create.ejs");
        });
        //push data of new account
        app.post("/attendance/create", async(req, res) => {
            let { name, email, pass, cpass, year, dob, collegeid } = req.body;
            const admin = await Head_Teacher.find({});
            const studPass = admin[0].studentPass;
            if (pass != cpass) {
                let err = "passwords and confirm password are not same";
                res.render("error.ejs", { err });
            }
            if (collegeid != studPass) {
                let err = "Invalid Credentialities";
                res.render("error.ejs", { err });
            }
            else {
                const new_student = new Student({
                    name: name,
                    email: email,
                    password: pass,
                    year: year,
                    dob: dob,
                    created_at: new Date()
                });
                new_student.save()
                    .then(result => {
                        res.redirect("/attendance/login");
                    })
                    .catch(err => {
                        res.render("error.ejs", { err });
                    });
            }
        });
        //########################################################################################################
        //========================================================================>>


        //========================================================================>>
        //login as a Teacher and give accesss so that they can mark the attendance of student

        //create route
        app.get("/attendance/Tcreate", (req, res) => {
            //render the form to teacher
            res.render("teacher/create.ejs");
        });
        app.post("/attendance/Tcreate", async(req, res) => {
            let { name, email, password, cpassword, dob, collegeid, workingExperience } = req.body
            const admin = await Head_Teacher.find({});
            const teachPass = admin[0].teacherPass;
            if (password != cpassword) {
                const err = "password are not match";
                res.render("error.ejs", { err });
            }
            else if (collegeid != teachPass) {
                const err = " college id is not verified or you are a invalid teacher";
                res.render("error.ejs", { err });
            }
            else {
                const new_teacher = new Teacher({
                    name: name,
                    email: email,
                    password: password,
                    dob: dob,
                    created_at: new Date(),
                    workingExperience: workingExperience
                });

                new_teacher.save()
                    .then(result => {
                        res.redirect("/attendance/login");
                    })
                    .catch(err => {
                        res.render("error.ejs", { err });
                    });
            }
        });

        //login route display the years in option
        app.post("/attendance/Tlogin", (req, res) => {
            let { email, pass } = req.body;
            Teacher.findOne({ email: email })
                .then(result => {
                    if (result.password != pass) {
                        let err = "password or email does not matched";
                        res.render("error.ejs", { err });
                    }
                    else {
                        res.render("teacher/teacher.ejs", { result });
                    }
                })
                .catch(err => {
                    res.render("error.ejs", { err });
                });
        });

        //subject displaying route according to the year
        app.post("/attendance/:id", (req, res) => {
            let { id } = req.params;
            let { year } = req.body;
            Teacher.findOne({ _id: id })
                .then(result => {
                    res.render("teacher/subjects.ejs", { result, year });
                })
                .catch(err => {
                    res.render("error.ejs", { err });
                });

        });


        //mark attendance page(displaying the name of student)

        app.get("/attendance/:year/:id/:subjectname", (req, res) => {

            let { id, year, subjectname } = req.params;

            Teacher.findOne({ _id: id })
                .then(result => {
                    Student.find({ year: year })
                        .then(result => {
                            res.render("teacher/mark.ejs", { subjectname, result,id, year });
                        })
                        .catch(err => {
                            res.render("error.ejs", { err });
                        });
                })
                .catch(err => {
                    res.render("error.ejs", { err });
                })
        });

        // POST request handle karne ke liye route define karna
        app.post("/attendance/:year/:id/:subjectname", (req, res) => {
            
            let { id, subjectname, year } = req.params;
            const { student } = req.body; // 'student' input field ka name hai
            const subject_name = eval(subjectname);
            
            Student.find({year:year})
            .then(result=>{
                const attendance = result.map(el =>{
                    let current_id = (el.id).toString();
                    return{
                            id:el._id,
                            date:new Date(),
                            present:student.includes(current_id),
                            marked_by:id
                    };
                });
                
                subject_name.insertMany(
                    attendance
                )
                .then(result=>{
                    // console.log(result);
                    res.send("Attendance marked successfully");
                })
                .catch(err=>{ 
                    res.render("error.ejs",{err});
                });

                
            })
            
        });

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