const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year4me2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year4me2024?retryWrites=true&w=majority&appName=Cluster0");
const year4me2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year4me2024?retryWrites=true&w=majority&appName=Cluster0");

const studentPresentSchema =new Schema({

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


//year me 4
 
// MEProject , MEInternshipAssesment

module.exports.MEInternshipAssesment= year4me2024.model("MEInternshipAssesment", studentPresentSchema);
module.exports.MEProject= year4me2024.model("MEProject", studentPresentSchema);
