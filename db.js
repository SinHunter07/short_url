const mongoose = require('mongoose')

mongoose.set("strictQuery", true);
async function connectTOmongoDb(url) {
    return mongoose.connect(url);
}


module.exports = {
    connectTOmongoDb,

}