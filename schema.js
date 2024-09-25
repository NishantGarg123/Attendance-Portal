const {Student , Teacher , Admin}= require("./models/college");
const Joi = require('joi');

// studentSchema,teacherSchema,adminSchame
module.exports.studentSchema = Joi.object({

    Student:Joi.object({
         username: Joi.string().required(),
         email:Joi.string().required(),
         password:Joi.string().required(),
         cpass:Joi.string().required(),
         collegeid:Joi.string().required(),
         year:Joi.number().required(),
         dob:Joi.date().required(),
         created_at:Joi.date()
    }).required()
});

module.exports.teacherSchema = Joi.object({

    Teacher:Joi.object({

        username:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
        cpassword:Joi.string().required(),
        collegeid:Joi.string().required(),
        dob:Joi.date().required(),
        created_at:Joi.date(),
        workingExperience:Joi.string().required()
    }).required()
});

module.exports.adminSchame =Joi.object({

    Admin:Joi.object({

        name:Joi.string(),
        email:Joi.string(),
        adminPass:Joi.string().required(),
        studentPass:Joi.string().required(), 
        teacherPass:Joi.string().required()        

    }).required()
})