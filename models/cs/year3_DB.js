const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const year3cs2024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year3cs2024?retryWrites=true&w=majority&appName=Cluster0");
// const year3cs2024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year3cs2024?retryWrites=true&w=majority&appName=Cluster0");
const year3cs2024 = mongoose.createConnection("mongodb+srv://attendance:attendance@cluster0.ftxu0ld.mongodb.net/year3cs2024?retryWrites=true&w=majority&appName=Cluster0")
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



//year3
// Dbms, Cd, Daa, Wd, Hci, Constitution, Cn, Wt, Uhb, TraditionalCulture, Se, Dip 

module.exports.CSDbms = year3cs2024.model("CSDbms", studentPresentSchema);
module.exports.CSCd = year3cs2024.model("CSCd", studentPresentSchema);
module.exports.CSDaa = year3cs2024.model("CSDaa", studentPresentSchema);
module.exports.CSWd = year3cs2024.model("CSWd", studentPresentSchema);
module.exports.CSHci = year3cs2024.model("CSHci", studentPresentSchema);
module.exports.CSConstitution = year3cs2024.model("CSConstitution ", studentPresentSchema);

module.exports.CSCn = year3cs2024.model("CSCn", studentPresentSchema);
module.exports.CSWt = year3cs2024.model("CSWt", studentPresentSchema);
module.exports.CSUhb = year3cs2024.model("CSUhb", studentPresentSchema);
module.exports.CSTraditionalCulture = year3cs2024.model("CSTraditionalCulture", studentPresentSchema);
module.exports.CSSe = year3cs2024.model("CSSe", studentPresentSchema);
module.exports.CSDip = year3cs2024.model("CSDip", studentPresentSchema);
