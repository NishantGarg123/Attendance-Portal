const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year2ee2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year2ee2024?retryWrites=true&w=majority&appName=Cluster0");


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

//yearee2
// EEAnalogDevicesElectronicCircuits,EETechnicalCommunication,EEElectromagneticFieldTheory,EEElectricalMeasurementsInstrumentation,EEBasicSignalsSystems,EECyberSecurity
//EEMathsIV,EEUniversalHumanValues,EEDigitalElectronics,EEElectricalMachinesI,EENetworksAnalysisSynthesis,EEEnvironmentalScience

module.exports.EEAnalogDevicesElectronicCircuits = year2ee2024.model("EEAnalogDevicesElectronicCircuits ", studentPresentSchema);
module.exports.EETechnicalCommunication = year2ee2024.model("EETechnicalCommunication ", studentPresentSchema);
module.exports.EEElectromagneticFieldTheory = year2ee2024.model("EEElectromagneticFieldTheory", studentPresentSchema);
module.exports.EEElectricalMeasurementsInstrumentation = year2ee2024.model("EEElectricalMeasurements&Instrumentation ", studentPresentSchema);
module.exports.EEBasicSignalsSystems = year2ee2024.model("EEBasicSignalsSystems ", studentPresentSchema);
module.exports.EECyberSecurity = year2ee2024.model("EECyberSecurity", studentPresentSchema);

module.exports.EEMathsIV  = year2ee2024.model("EEMathsIV", studentPresentSchema);
module.exports.EEUniversalHumanValues = year2ee2024.model("EEUniversalHumanValues ", studentPresentSchema);
module.exports.EEDigitalElectronics = year2ee2024.model("EEDigitalElectronics ", studentPresentSchema);
module.exports.EEElectricalMachinesI = year2ee2024.model("EEElectricalMachinesI ", studentPresentSchema);
module.exports.EENetworksAnalysisSynthesis = year2ee2024.model("EENetworksAnalysisSynthesis ", studentPresentSchema);
module.exports.EEEnvironmentalScience = year2ee2024.model("EEEnvironmentalScience", studentPresentSchema);
