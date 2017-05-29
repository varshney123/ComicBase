var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var Series_Schema = new Schema({
    Series_ID: {type: Number},
    Series_Name: {type: String},
    Series_Data:{type:String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Series', Series_Schema);