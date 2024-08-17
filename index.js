//========================================================================>>
const mongoose = require('mongoose');
const express = require('express');
const { type } = require('os');
const app = express();
const port = 8080;

path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
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
const studentPresentSchema = mongoose.Schema({

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
        unique: true
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
const TeacherSchema = ({
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
        unique: true
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
//========================================================================>>



//========================================================================>>

//########################################################################################################
//Root port
app.get("/", (req, res) => {
    res.send("working");
});
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
                res.render("student/student.ejs", { result });
            }
        })
        .catch(err => {
            res.render("error.ejs", { err });
        });
});
//########################################################################################################


//########################################################################################################
//create route
app.get("/attendance/create", (req, res) => {
    res.render("student/create.ejs");
});
//push data of new account
app.post("/attendance/create", (req, res) => {
    let { name, email, pass, cpass, year, dob, collegeid } = req.body;
    if (pass != cpass) {
        let err = "passwords and confirm password are not same";
        res.render("error.ejs", { err });
    }
    if (collegeid != 111) {
        let err = "college id is not correct";
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
app.post("/attendance/Tcreate", (req, res) => {
    let { name, email, password, cpassword, dob, collegeid, workingExperience } = req.body
    if (password != cpassword) {
        const err = "password are not match";
        res.render("error.ejs", { err });
    }
    else if (collegeid != 222) {
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

app.get("/markattendance/:year/:id/:subjectname", (req, res) => {

    let { id, year, subjectname } = req.params;

    Teacher.findOne({ _id: id })
        .then(result => {
            Student.find({ year: year })
                .then(result => {
                    res.render("teacher/mark.ejs", { subjectname, result, id, year });
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
app.post("/markattendance/:id/:subjectname/:year", (req, res) => {
    
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
//handle the route of subjects (this route will display the attendance of subjects of student).
app.get("/attendance/:id/:subjectName", (req, res) => {
    let { id, subjectName } = req.params;
    const subject = eval(subjectName);
    subject.find({ id: id })
        .then(result => {

            // res.send(result);
            res.render("student/subject.ejs", { result, subjectName });
        })
        .catch(err => {
            res.render("error.ejs", { err });
        });
});

//========================================================================>>






//========================================================================>>
app.listen(port, () => {
    console.log(`connected to the pot ${port}`);
})

//========================================================================>>









