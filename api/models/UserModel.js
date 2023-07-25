const mongoose = require('mongoose')
const Schema = mongoose.Schema
var bcrypt = require('bcryptjs');

var UserModel = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//hash the password
UserModel.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check if password is valid
UserModel.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

  

module.exports = mongoose.model('User', UserModel);

// module.exports = UserModel;