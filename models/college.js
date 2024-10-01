const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// const college2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/college2024?retryWrites=true&w=majority&appName=Cluster0");
const college2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/college2024?retryWrites=true&w=majority&appName=Cluster0");
// const college2024 = mongoose.createConnection('mong1odb://127.0.0.1:27017/college2024');
//student Schema
// name ,email,password,year,dob,created_at
const studentSchema = new mongoose.Schema({
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
    branch: {
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


// const Admin = college2024.model("Admin", AdminSchema);
// const AdminData = async()=>{

//     const admin = new Admin({
//         name:"nishant garg",
//         email:"gargacsnishant@gmail.com",
//         adminPass:"3",
//         studentPass:"1",
//         teacherPass:"2"
//     });
//     await admin.save();
// }
// AdminData();

// Student , Teacher , Admin

studentSchema.plugin(passportLocalMongoose);
TeacherSchema.plugin(passportLocalMongoose);
// AdminSchema.plugin(passportLocalMongoose);

module.exports.Student = college2024.model("Student", studentSchema);
module.exports.Teacher = college2024.model("Teacher", TeacherSchema);
module.exports.Admin = college2024.model("Admin", AdminSchema);


//========================================================================>>

//========================================================================>>

