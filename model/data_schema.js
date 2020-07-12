var mongoose = require('mongoose');
mongoose.set('debug', true);

var data_schema = mongoose.Schema({
    plot:   {type:String},
    runtime: {type:String}, 
    poster: {type:String}, 
    title: {type:String},
    fullplot: {type:String},
    type: {type:String}
});

var dataModel = mongoose.model('movies', data_schema);

module.exports = dataModel;