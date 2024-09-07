const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year42024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year42024?retryWrites=true&w=majority&appName=Cluster0");

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


//year 4
// Ml, Distribution, CloudComputing, Rd, Qm, DataWare
module.exports.Ml = year42024.model("Ml", studentPresentSchema);
module.exports.Distribution = year42024.model("Distribution", studentPresentSchema);
module.exports.Qm = year42024.model("Qm", studentPresentSchema);
module.exports.Rd = year42024.model("Rd", studentPresentSchema);
module.exports.DataWare = year42024.model("DataWare", studentPresentSchema);
module.exports.CloudComputing = year42024.model("CloudComputing", studentPresentSchema);
