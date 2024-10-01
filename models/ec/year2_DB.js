const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year2ec2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year2ec2024?retryWrites=true&w=majority&appName=Cluster0");
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

//yearec2


// ECMaterialScience, ECUniversalHumanValue ,ECElectronicDevices ,ECDigitalSystemDesign ,ECNetworkAnalysisAndSynthesis ,ECPythonProgramming  ,ECMiniProjectI , ,ECMathsIV , ECtechnicalCommunication ,ECCommunicationEngineering ,ECAnalogCircuits ,ECSignalSystem ,ECComputerSystemSecurity

module.exports.ECMaterialScience = year2ec2024.model("ECMaterialScience ", studentPresentSchema);
module.exports.ECUniversalHumanValue = year2ec2024.model("ECUniversalHumanValue ", studentPresentSchema);
module.exports.ECElectronicDevices = year2ec2024.model("ECElectronicDevices", studentPresentSchema);
module.exports.ECDigitalSystemDesign = year2ec2024.model("ElectricalMeasurements&ECDigitalSystemDesign ", studentPresentSchema);
module.exports.ECNetworkAnalysisAndSynthesis = year2ec2024.model("ECNetworkAnalysisAndSynthesis ", studentPresentSchema);
module.exports.ECPythonProgramming = year2ec2024.model("ECPythonProgramming", studentPresentSchema);
module.exports.ECMiniProjectI = year2ec2024.model("ECMiniProjectI", studentPresentSchema);

module.exports.ECMathsIV  = year2ec2024.model("ECMathsIV", studentPresentSchema);
module.exports.ECtechnicalCommunication = year2ec2024.model("ECtechnicalCommunication ", studentPresentSchema);
module.exports.ECCommunicationEngineering = year2ec2024.model("ECCommunicationEngineering ", studentPresentSchema);
module.exports.ECAnalogCircuits = year2ec2024.model("ECAnalogCircuits ", studentPresentSchema);
module.exports.ECSignalSystem = year2ec2024.model("ECSignalSystem ", studentPresentSchema);
module.exports.ECComputerSystemSecurity = year2ec2024.model("ECComputerSystemSecurity", studentPresentSchema);
