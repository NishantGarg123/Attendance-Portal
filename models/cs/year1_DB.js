const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const year12024 = mongoose.createConnection("mongodb+srv://vikashmishra8371:raXxlY7Qxp9RITrb@cluster0.ouwkxt4.mongodb.net/year12024?retryWrites=true&w=majority&appName=Cluster0");
// const year12024 = mongoose.createConnection("mongodb+srv://gargacsnishant:mongonishant@cluster0.kmii7.mongodb.net/year12024?retryWrites=true&w=majority&appName=Cluster0");
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


//year 1
// Enggmaths1 ,Physics, Electricals, Softskills1, Pps, Ai, Enggmaths2, Chemistry, Electronics, Mechanical, EmergingTech ,Softskills2

module.exports.Enggmaths1 = year12024.model("Enggmaths1", studentPresentSchema);
module.exports.Physics = year12024.model("Physics", studentPresentSchema);
module.exports.Electricals = year12024.model("Electricals", studentPresentSchema);
module.exports.Softskills1 = year12024.model("Softskills1", studentPresentSchema);
module.exports.Pps = year12024.model("Pps", studentPresentSchema);
module.exports.Ai = year12024.model("Ai", studentPresentSchema);

module.exports.Enggmaths2 = year12024.model("Enggmaths2", studentPresentSchema);
module.exports.Chemistry = year12024.model("Chemistry", studentPresentSchema);
module.exports.Electronics = year12024.model("Electronics", studentPresentSchema);
module.exports.Softskills2 = year12024.model("Softskills2", studentPresentSchema);
module.exports.Mechanical = year12024.model("Mechanical", studentPresentSchema);
module.exports.EmergingTech = year12024.model("EmergingTech", studentPresentSchema);
