const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year3ee2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year3ee2024?retryWrites=true&w=majority&appName=Cluster0");
const year3ee2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year3ee2024?retryWrites=true&w=majority&appName=Cluster0");

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

module.exports.PowerSystemI  = year3ee2024.model("EEPowerSystemI", studentPresentSchema);
module.exports.ControlSystem= year3ee2024.model("EEControlSystem ", studentPresentSchema);
module.exports.ElectricalMachinesII= year3ee2024.model("EEElectricalMachinesII ", studentPresentSchema);
module.exports.SensorsandTransducers = year3ee2024.model("EESensorsandTransducers", studentPresentSchema);
module.exports.NeuralNetworksFuzzySystem= year3ee2024.model("EENeuralNetworksFuzzySystem", studentPresentSchema);
module.exports.ConstitutionofIndia= year3ee2024.model("EEConstitutionofIndia", studentPresentSchema);

module.exports.PowerSystemII= year3ee2024.model("EEPowerSystemII", studentPresentSchema);
module.exports.MicroprocessorandMicrocontroller= year3ee2024.model("EEMicroprocessorandMicrocontroller ", studentPresentSchema);
module.exports.PowerElectronics= year3ee2024.model("EEPowerElectronics", studentPresentSchema);
module.exports.DigitalControlSystem= year3ee2024.model("EEDigitalControlSystem", studentPresentSchema);
module.exports.OpenElectiveI= year3ee2024.model("EEOpenElectiveI", studentPresentSchema);
module.exports.EssenceofIndianTraditionalKnowledge= year3ee2024.model("EEEssenceofIndianTraditionalKnowledge", studentPresentSchema);
