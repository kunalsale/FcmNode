var mongodb = require('./mongodb');
var mongoose = mongodb.mongoose;

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "userName" : String,
    "userNumber" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);
