const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year3me2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year3me2024?retryWrites=true&w=majority&appName=Cluster0");


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

// MEHeatAndMassTransfer MEStrengthOfMaterial MEIndustrialEngg MEComputerIntegratedManufacturing MEAdvanceWelding MEMiniProjectII  MEConstitutionOfIndia   MERefrigerationAndAirConditioning MEMachineDesign METheoryOfMachine MENonDestructiveTesting MEUnderstandingHumanBeing MEIndianTraditional 

module.exports.MEHeatAndMassTransfer  = year3me2024.model("MEHeatAndMassTransfer", studentPresentSchema);
module.exports.MEStrengthOfMaterial= year3me2024.model("MEStrengthOfMaterial ", studentPresentSchema);
module.exports.MEIndustrialEngg= year3me2024.model("MEIndustrialEngg ", studentPresentSchema);
module.exports.MEComputerIntegratedManufacturing = year3me2024.model("MEComputerIntegratedManufacturing", studentPresentSchema);
module.exports.MEAdvanceWelding= year3me2024.model("MEAdvanceWelding", studentPresentSchema);
module.exports.MEMiniProjectII= year3me2024.model("MEMiniProjectII", studentPresentSchema);
module.exports.MEConstitutionOfIndia= year3me2024.model("MEConstitutionOfIndia", studentPresentSchema);

module.exports.MERefrigerationAndAirConditioning= year3me2024.model("MERefrigerationAndAirConditioning", studentPresentSchema);
module.exports.MEMachineDesign= year3me2024.model("MEMachineDesign ", studentPresentSchema);
module.exports.METheoryOfMachine= year3me2024.model("METheoryOfMachine", studentPresentSchema);
module.exports.MENonDestructiveTesting= year3me2024.model("MENonDestructiveTesting", studentPresentSchema);
module.exports.MEUnderstandingHumanBeing= year3me2024.model("MEUnderstandingHumanBeing", studentPresentSchema);
module.exports.MEIndianTraditional= year3me2024.model("MEIndianTraditional", studentPresentSchema);
