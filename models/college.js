const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const college2024 = mongoose.createConnection('mongodb://127.0.0.1:27017/college2024');

//student Schema
// name ,email,password,year,dob,created_at
const studentSchema = new mongoose.Schema({
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
// name,email,password,dob,created_at,workingExperience
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

//Admin Schema
// name,email,adminPass , studentPass , teacherPass
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

// Student , Teacher , Admin
module.exports.Student = college2024.model("Student", studentSchema);
module.exports.Teacher = college2024.model("Teacher", TeacherSchema);
module.exports.Admin = college2024.model("Admin", AdminSchema);


//========================================================================>>
// const AdminData = async()=>{

//     const admin = new Admin({
//         name:"nishant garg",
//         email:"gargacsnishant@gmail.com",
//         adminPass:"9105060079",
//         studentPass:"7088177858",
//         teacherPass:"9758674359"
//     });
//     await admin.save();
// }
// AdminData();

//========================================================================>>

