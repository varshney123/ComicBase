// Load required packages
var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var UserSchema = new Schema({
    UserType_ID:{type:String},
    username: {type: String},
    password: {type: String},
    created_at: {type: Date,default : Date.now},
    updated_at: ""
});

module.exports=mongoose.model('User', UserSchema);
  