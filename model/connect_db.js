var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://chanin034:Chanin067635741@cluster0-jqide.mongodb.net/sample_mflix?retryWrites=true&w=majority',{ useNewUrlParser: true });

require('./data_schema');