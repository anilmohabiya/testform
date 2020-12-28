const mongoose = require('mongoose');


 mongoose.connect("mongodb://localhost:27017/Maladtest",{
    useNewUrlParser :true,
    useCreateIndex:true,
    useUnifiedTopology:true

 }).then(()=>{
     console.log('db connection running')
 }).catch((error)=>{
   console.log('no connection')
 })