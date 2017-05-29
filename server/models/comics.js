var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var Comics_Schema = new Schema({
    Season_ID: {type: Number},
    Comic_ID: {type: Number},
    Comic_Name: {type: String},
    Comic_Image:{type:String},
    Comic_Data:{type:String},
    Comic_Comments:{type:String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Comic', Comics_Schema);