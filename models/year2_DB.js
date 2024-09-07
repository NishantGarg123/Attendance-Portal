const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year22024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year22024?retryWrites=true&w=majority&appName=Cluster0");

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

module.exports.Enggmaths4 = year22024.model("Enggmaths4", studentPresentSchema);
module.exports.Uhv = year22024.model("Uhv", studentPresentSchema);
module.exports.Coa = year22024.model("Coa", studentPresentSchema);
module.exports.Dstl = year22024.model("Dstl", studentPresentSchema);
module.exports.Ds = year22024.model("Ds", studentPresentSchema);
module.exports.Css = year22024.model("Css", studentPresentSchema);

module.exports.Ese = year22024.model("Ese", studentPresentSchema);
module.exports.Tc = year22024.model("Tc", studentPresentSchema);
module.exports.Toc = year22024.model("Toc", studentPresentSchema);
module.exports.Mp = year22024.model("Mp", studentPresentSchema);
module.exports.Os = year22024.model("Os", studentPresentSchema);
module.exports.Python = year22024.model("Python", studentPresentSchema);
