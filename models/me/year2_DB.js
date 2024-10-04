const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year2me2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year2me2024?retryWrites=true&w=majority&appName=Cluster0");
const year2me2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year2me2024?retryWrites=true&w=majority&appName=Cluster0");

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

//yearme 2

// MEElectronicsEngineering MEUniversalHumanValue METhermodynamics MEFluidMechanics MEMaterialsEngineering MEMiniProjectI  MEComputerSystemSecurity  MEMathsIV METechnicalCommunication MEAppliedThermodynamics MEEnggMechanics MEManufacturingProcesses MEPythonProgramming 


module.exports.MEElectronicsEngineering = year2me2024.model("MEElectronicsEngineering ", studentPresentSchema);
module.exports.MEUniversalHumanValue = year2me2024.model("MEUniversalHumanValue ", studentPresentSchema);
module.exports.METhermodynamics = year2me2024.model("METhermodynamics", studentPresentSchema);
module.exports.MEFluidMechanics = year2me2024.model("MEFluidMechanics&Instrumentation ", studentPresentSchema);
module.exports.MEMaterialsEngineering = year2me2024.model("MEMaterialsEngineering ", studentPresentSchema);
module.exports.MEComputerSystemSecurity = year2me2024.model("MEComputerSystemSecurity", studentPresentSchema);
module.exports.MEMiniProjectI = year2me2024.model("MEMiniProjectI", studentPresentSchema);

module.exports.MEMathsIV  = year2me2024.model("MEMathsIV", studentPresentSchema);
module.exports.METechnicalCommunication = year2me2024.model("METechnicalCommunication ", studentPresentSchema);
module.exports.MEAppliedThermodynamics = year2me2024.model("MEAppliedThermodynamics ", studentPresentSchema);
module.exports.MEEnggMechanics = year2me2024.model("MEEnggMechanics ", studentPresentSchema);
module.exports.MEManufacturingProcesses = year2me2024.model("MEManufacturingProcesses ", studentPresentSchema);
module.exports.MEPythonProgramming = year2me2024.model("MEPythonProgramming", studentPresentSchema);
