var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var Seasons_Schema = new Schema({
    Season_Name: {type: String},
    Season_Data:{type:String},
    Series_ID:{type:String},
    Season_ID: {type: Number},
    Starts_On:{type: String},
    Ends_On:{type: String},
    created_at: {type: Date,default : Date.now},
    updated_at:""
});

module.exports=mongoose.model('Season', Seasons_Schema);