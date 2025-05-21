const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year2cs2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year2cs2024?retryWrites=true&w=majority&appName=Cluster0");
// const year2cs2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net//year2cs2024?retryWrites=true&w=majority&appName=Cluster0");
const year2cs2024 = mongoose.createConnection("mongodb+srv://attendance:attendance@cluster0.ftxu0ld.mongodb.net/year2cs2024?retryWrites=true&w=majority&appName=Cluster0")
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

//year2
// Enggmaths4, Uhv, Coa, Dstl, Ds, Css, Ese, Tc, Toc, Mp, Os, Python

module.exports.CSEnggmaths4 = year2cs2024.model("CSEnggmaths4", studentPresentSchema);
module.exports.CSUhv = year2cs2024.model("CSUhv", studentPresentSchema);
module.exports.CSCoa = year2cs2024.model("CSCoa", studentPresentSchema);
module.exports.CSDstl = year2cs2024.model("CSDstl", studentPresentSchema);
module.exports.CSDs = year2cs2024.model("CSDs", studentPresentSchema);
module.exports.CSCss = year2cs2024.model("CSCss", studentPresentSchema);

module.exports.CSEse = year2cs2024.model("CSEse", studentPresentSchema);
module.exports.CSTc = year2cs2024.model("CSTc", studentPresentSchema);
module.exports.CSToc = year2cs2024.model("CSToc", studentPresentSchema);
module.exports.CSMp = year2cs2024.model("CSMp", studentPresentSchema);
module.exports.CSOs = year2cs2024.model("CSOs", studentPresentSchema);
module.exports.CSPython = year2cs2024.model("CSPython", studentPresentSchema);
