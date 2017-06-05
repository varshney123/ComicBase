var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var CommentSchema = new Schema({
    Comic_ID:{type:String},
    Comment: {type: String},
    created_at: {type: Date,default : Date.now},
    updated_at: ""
});

module.exports=mongoose.model('Comment', CommentSchema);
  