const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year32024 = mongoose.createConnection('mongodb://127.0.0.1:27017/year32024');

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

module.exports.Dbms = year32024.model("Dbms", studentPresentSchema);
module.exports.Cd = year32024.model("Cd", studentPresentSchema);
module.exports.Daa = year32024.model("Daa", studentPresentSchema);
module.exports.Wd = year32024.model("Wd", studentPresentSchema);
module.exports.Hci = year32024.model("Hci", studentPresentSchema);
module.exports.Constitution = year32024.model("Constitution ", studentPresentSchema);

module.exports.Cn = year32024.model("Cn", studentPresentSchema);
module.exports.Wt = year32024.model("Wt", studentPresentSchema);
module.exports.Uhb = year32024.model("Uhb", studentPresentSchema);
module.exports.TraditionalCulture = year32024.model("TraditionalCulture", studentPresentSchema);
module.exports.Se = year32024.model("Se", studentPresentSchema);
module.exports.Dip = year32024.model("Dip", studentPresentSchema);
