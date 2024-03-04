const express=require('express')
const app=express()



const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hospital')
  .then(() => console.log('Connected!'));

  const db=mongoose.connection
  const cors=require('cors')
  app.use(express.json())
  app.use(cors())

app.post('/insert',async(req,res)=>{
    console.log(req.body);
  //let response=await db.collection('student').insertOne(req.body)
  console.log(response);
  res.json(response)
})
app.get('/find',async(req,res)=>{
    console.log(req.body);
  let response=await db.collection('student').find.toArray()
  console.log(response);
  res.json(response)
})
app.post
('/login',async(req,res)=>{
  console.log(req,res);
  let response=await db.collection('student').findOne(req.body)
  console.log(response);
  if(response){
    res.json({status:true})
    console.log('true');
  }
  else{
    res.json({status:false})
    console.log('false');
  }
})

app.get('/findById/:id',async (req,res)=>{
  console.log(req.params.id);
  const id=req.params.id
  console.log(id);
  let response=await Student.findById(id)
  // let response=await db.collection('student').findOne({_id:id})
  console.log(response);
  res.json(response)
})





app.put('/update',async function(req,res){
  let response=await db.collection('student').updateOne({_id:id},{$set:req.body})
  console.log(response);
  res.json(response)
})



  app.listen(4000)