//========================================================================>>
const mongoose = require('mongoose');
const express = require('express');
const { type } = require('os');
const app = express();
const port = 8080;

path = require("path");
app.set("views" ,path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
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

    id:{
        type:String,
        require:true
    },
    date:
    {
        type:Date,
        require:true
    },
    present:{
        type:Boolean,
        require:true
    }
});
//schema of student
const studentSchema = new mongoose.Schema({
    name:{ 
        type:String,
        require:true,
    },
    last:{ 
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    year:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    created_at:{
        type:String
    }
});
//Teacher Schema
const TeacherSchema = ({
    first:{ 
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    dob:{
        type:String,
        require:true
    },
    created_at:{
        type:String
    },
    workingExperience:{
        type:String
    }
});
//========================================================================>>




//========================================================================>>
//models of DB

//year 1
const Enggmaths1 = year12024.model("Enggmaths1",studentPresentSchema);
const Physics = year12024.model("Physics",studentPresentSchema);
const Electricals = year12024.model("Electricals",studentPresentSchema);
const Softskills1 = year12024.model("Softskills1",studentPresentSchema);
const Pps = year12024.model("Pps",studentPresentSchema);

const Enggmaths2 = year12024.model("Enggmaths2",studentPresentSchema);
const Chemistry = year12024.model("Chemistry",studentPresentSchema);
const Electronics = year12024.model("Electronics",studentPresentSchema);
const Softskills2 = year12024.model("Softskills2",studentPresentSchema);
const Mechanical = year12024.model("Mechanical",studentPresentSchema);

//student model
const Student = college2024.model("Student",studentSchema);
const Teacher = college2024.model("Teacher",TeacherSchema);
//========================================================================>>

Physics.insertMany([
    {
        id:"66b70ac5b6a18c708d08bc02",
        date:new Date(),
        present:true
    },
    {
        id:"66b70ac5b6a18c708d08bc02",
        date:new Date(),
        present:false
    },
    {
        id:"66b70ac5b6a18c708d08bc02",
        date:new Date(),
        present:true
    },
    {
        id:"66b70ac5b6a18c708d08bc02",
        date:new Date(),
        present:true
    },
    {
        id:"66b70ac5b6a18c708d08bc02",
        date:new Date(),
        present:false
    },{
        id:"66b70ac5b6a18c708d08bc02",
        date:new Date(),
        present:true
    },
]);


//========================================================================>>

    //Root port
        app.get("/", (req , res)=>{
            res.send("working");
        });

    //home route
    app.get("/attendance",(req , res)=>{
        res.render("home.ejs");
    });

    //Login route
    app.get("/attendance/login",(req , res )=>{
        res.render("login.ejs");
    });
    //login and redirect to presenttion route
    app.post("/attendance/login",(req , res)=>{   
        let {email , pass } = req.body;
        Student.findOne({email:email})
        .then( result=>{
            if(result.password !=pass)
            {  
                let err= "password or email does not matched";
                res.render("error.ejs",{err});
            }
            else
            {
               res.render("student.ejs",{result});
            }
        })
        .catch( err=>{
             res.render("error.ejs",{err});
        });
    });
    //create route
    app.get("/attendance/create",(req , res )=>{
        res.render("create.ejs");
    });
    //push data of new account
    app.post("/attendance/create",(req , res)=>{
        let { name , email , pass , repass , year , dob , collegeid} = req.body;
        if(pass != repass)
        {
            let err= "passwords and confirm password are not same";
            res.render("error.ejs",{err});
        }
        if(collegeid != 111)
        {
            let err ="college id is not correct";
            res.render("error.ejs",{err});
            
        }
        else{
                const new_student =  new Student({
                    name:name,
                    email:email,
                    password:pass,
                    year:year,
                    dob:dob,
                    created_at:new Date()
                });
                new_student.save()
                .then(result=>{
                        res.redirect("/attendance/login");
                })
                .catch(err=>{
                    res.render("error.ejs",{err});
                    });               
        }
    });
//========================================================================>>





//========================================================================>>
//handle the route of subjects
app.get("/attendance/:id/:subjectName",(req ,res)=>{
    let {id,subjectName} = req.params;
    const subject = eval(subjectName);    
    subject.find({id:id})
    .then(result=>{
        res.render("subject.ejs",{result , subjectName});    
    })
    .catch(err=>{
        res.render("error.ejs",{err});
    });
});

//========================================================================>>




    

//========================================================================>>
app.listen(port , ()=>{
    console.log(`connected to the pot ${port}` );
})

//========================================================================>>