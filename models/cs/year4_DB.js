const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year4cs2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year4cs2024?retryWrites=true&w=majority&appName=Cluster0");
// const year4cs2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year4cs2024?retryWrites=true&w=majority&appName=Cluster0");
const year4cs2024 = mongoose.createConnection("mongodb+srv://attendance:attendance@cluster0.ftxu0ld.mongodb.net/year4cs2024?retryWrites=true&w=majority&appName=Cluster0")
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
module.exports.CSMl = year4cs2024.model("CSMl", studentPresentSchema);
module.exports.CSDistribution = year4cs2024.model("CSDistribution", studentPresentSchema);
module.exports.CSQm = year4cs2024.model("CSQm", studentPresentSchema);
module.exports.CSRd = year4cs2024.model("CSRd", studentPresentSchema);
module.exports.CSDataWare = year4cs2024.model("CSDataWare", studentPresentSchema);
module.exports.CSCloudComputing = year4cs2024.model("CSCloudComputing", studentPresentSchema);
