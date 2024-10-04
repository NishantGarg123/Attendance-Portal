const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year3ec2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year3ec2024?retryWrites=true&w=majority&appName=Cluster0");
const year3ec2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year3ec2024?retryWrites=true&w=majority&appName=Cluster0");

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



//yearec3
// ECIntegratedCircuit ,ECMicroprocessorAndMicrocontroller , ECDigitalSignalProcessing , ECVlsiTechnology , ECElectronicsSwitching , ECConstitutionOfIndia , ECMiniProjectII , ECDigitalCommunication ,ECControlSystem, ECAntennaAndWavePRopagation, ECDataCommunicationNetwork ,ECUnderstandingHumanBeing ,ECIndianTradition

module.exports.ECIntegratedCircuit  = year3ec2024.model("ECIntegratedCircuit", studentPresentSchema);
module.exports.ECMicroprocessorAndMicrocontroller= year3ec2024.model("ECMicroprocessorAndMicrocontroller ", studentPresentSchema);
module.exports.ECDigitalSignalProcessing= year3ec2024.model("ECDigitalSignalProcessing ", studentPresentSchema);
module.exports.ECVlsiTechnology = year3ec2024.model("ECVlsiTechnology", studentPresentSchema);
module.exports.ECElectronicsSwitching= year3ec2024.model("ECElectronicsSwitching", studentPresentSchema);
module.exports.ECConstitutionOfIndia= year3ec2024.model("ECConstitutionOfIndia", studentPresentSchema);
module.exports.ECMiniProjectII= year3ec2024.model("ECMiniProjectII", studentPresentSchema);

module.exports.ECDigitalCommunication= year3ec2024.model("ECDigitalCommunication", studentPresentSchema);
module.exports.ECControlSystem= year3ec2024.model("ECControlSystem ", studentPresentSchema);
module.exports.ECAntennaAndWavePRopagation= year3ec2024.model("ECAntennaAndWavePRopagation", studentPresentSchema);
module.exports.ECDataCommunicationNetwork= year3ec2024.model("ECDataCommunicationNetwork", studentPresentSchema);
module.exports.ECUnderstandingHumanBeing= year3ec2024.model("ECUnderstandingHumanBeing", studentPresentSchema);
module.exports.ECIndianTradition= year3ec2024.model("ECIndianTradition", studentPresentSchema);
