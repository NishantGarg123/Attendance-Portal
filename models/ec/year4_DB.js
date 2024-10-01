const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year4ec2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year4ec2024?retryWrites=true&w=majority&appName=Cluster0");


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


//yearee 4
// ECVlsiDesign ,ECRenewableEnergyResources ,ECWirelessAndMobileComminication ,ECRuralDevelopement ,ECProject  ,ECInternshipAssesment


module.exports.ECVlsiDesign= year4ec2024.model("ECVlsiDesign", studentPresentSchema);
module.exports.ECRenewableEnergyResources= year4ec2024.model("ECRenewableEnergyResources", studentPresentSchema);
module.exports.ECWirelessAndMobileComminication= year4ec2024.model("ECWirelessAndMobileComminication", studentPresentSchema);
module.exports.ECRuralDevelopement = year4ec2024.model("ECRuralDevelopement", studentPresentSchema);
module.exports.ECProject = year4ec2024.model("ECProject", studentPresentSchema);
module.exports.ECInternshipAssesment = year4ec2024.model("ECInternshipAssesment", studentPresentSchema);

