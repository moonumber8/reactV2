var mongoose = require('mongoose');
mongoose.set('debug', true);

var schema_user = mongoose.Schema({
    name:   {type:String},
    email: {type:String}, 
    password: {type:String}
});

var dataUser = mongoose.model('users', schema_user);

module.exports = dataUser;