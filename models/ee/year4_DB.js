const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year4ee2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year4ee2024?retryWrites=true&w=majority&appName=Cluster0");
const year4ee2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year4ee2024?retryWrites=true&w=majority&appName=Cluster0");

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
// HighVoltageEngineering , Electricdrives , OpenElectiveII , OpenElectiveIII , OpenElectiveIV
module.exports.EEHighVoltageEngineering= year4ee2024.model("EEHighVoltageEngineering", studentPresentSchema);
module.exports.EEElectricdrives= year4ee2024.model("EEElectricdrives", studentPresentSchema);
module.exports.EEOpenElectiveII= year4ee2024.model("EEOpenElectiveII", studentPresentSchema);
module.exports.EEOpenElectiveIII = year4ee2024.model("EEOpenElectiveIII", studentPresentSchema);
module.exports.EEOpenElectiveIV = year4ee2024.model("EEOpenElectiveIV", studentPresentSchema);

