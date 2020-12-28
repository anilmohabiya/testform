const mongoose = require('mongoose');
const validator = require('validator');

const tableSchema= new mongoose.Schema({
    storename:{
        type:String,
        minlength:4,
        required:true
    },
   
    taxnum:{
        type:String,
        minlength:11,
        maxlength:11,
        unique:true,
        required:true
    },
    message:{
        type:String,
        required:true,
        minlength:3 
    },
    website:{
       type:String,
       required:true,
       minlength:3
   },
   phone:{
    type:String,
    minlength:10,
    maxlength:10,
    unique:true,
    required:true,  
},
Streetadd:{
    type:String,
    required:true,
    minlength:3
},
Building:{
    type:String,
    required:true,
    minlength:3
},
   date:{
       type:Date,
       default:Date.now
   }

});
const Bussi= new mongoose.model('Bussi',tableSchema);

module.exports =Bussi;