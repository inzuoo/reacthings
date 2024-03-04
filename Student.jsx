const mongose=require('mongoose')
 

let studentSchema=new mongoose.Schema({
    username:{
        type:String,
        reqiure:true,
        unique:true
    },
    password:{
        type:string,
        require:true,
    }
})

let student=mongoose.model('Student',studentSchema,'student')
module.export=student