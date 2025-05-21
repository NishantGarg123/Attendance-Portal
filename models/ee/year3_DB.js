const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year3ee2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year3ee2024?retryWrites=true&w=majority&appName=Cluster0");
// const year3ee2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year3ee2024?retryWrites=true&w=majority&appName=Cluster0");
const year3ee2024 = mongoose.createConnection("mongodb+srv://attendance:attendance@cluster0.ftxu0ld.mongodb.net/year3ee2024?retryWrites=true&w=majority&appName=Cluster0")
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



//yearee3
// PowerSystemI, ControlSystem , ElectricalMachinesII , SensorsandTransducers , NeuralNetworksFuzzySystem , ConstitutionofIndia
//PowerSystemII , MicroprocessorandMicrocontroller , PowerElectronics  , DigitalControlSystem , OpenElectiveI , EssenceofIndianTraditionalKnowledge

module.exports.EEPowerSystemI  = year3ee2024.model("EEPowerSystemI", studentPresentSchema);
module.exports.EEControlSystem= year3ee2024.model("EEControlSystem ", studentPresentSchema);
module.exports.EEElectricalMachinesII= year3ee2024.model("EEElectricalMachinesII ", studentPresentSchema);
module.exports.EESensorsandTransducers = year3ee2024.model("EESensorsandTransducers", studentPresentSchema);
module.exports.EENeuralNetworksFuzzySystem= year3ee2024.model("EENeuralNetworksFuzzySystem", studentPresentSchema);
module.exports.EEConstitutionofIndia= year3ee2024.model("EEConstitutionofIndia", studentPresentSchema);

module.exports.EEPowerSystemII= year3ee2024.model("EEPowerSystemII", studentPresentSchema);
module.exports.EEMicroprocessorandMicrocontroller= year3ee2024.model("EEMicroprocessorandMicrocontroller ", studentPresentSchema);
module.exports.EEPowerElectronics= year3ee2024.model("EEPowerElectronics", studentPresentSchema);
module.exports.EEDigitalControlSystem= year3ee2024.model("EEDigitalControlSystem", studentPresentSchema);
module.exports.EEOpenElectiveI= year3ee2024.model("EEOpenElectiveI", studentPresentSchema);
module.exports.EEEssenceofIndianTraditionalKnowledge= year3ee2024.model("EEEssenceofIndianTraditionalKnowledge", studentPresentSchema);
