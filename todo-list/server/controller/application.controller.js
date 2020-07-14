const HttpResponse=require('../models/http-response')
const Todo = require('../models/todomodels');
const { response } = require('express');



//Add Task

const addtask = async(req,res)=>{
    const {title , description , deadline , isDone} = req.body;
    console.log(req.body);

    var createdTask =new  Todo({
        title , 
        description,
         deadline,
         isDone
        })

    try{
        await createdTask.save();
    }
    catch(err){
        const error = new HttpResponse("Couldn,t Add Task",501)
        return res.status(500).json({response : error})
    }
    res.status(201).json({response : createdTask})

}

const edittask = async(req,res)=>{
    const id= req.param.id;
    console.log(req.param.id);

    const data = req.body;
    console.log(data);

    try{
        await Todo.findByIdAndUpdate(id ,data , {new:true})
        res.send({success : true})
    }
    catch(err){
        const error = new HttpResponse("Couldn't Update" ,500)
        res.send(500).json({response : error})
    }
    res.send(500).json({response:data})
}

const deletetask =async(req,res) => {
    const id = req.param.id;
    console.log(req.param.id) 

    const data = req.body;

    try{
        await Todo.findByIdAndDelete(id,data,{new :true})
        res.send({success:true})
    }
    catch(err){
        const error = new HttpResponse("Couldn't Delete",500)
        res.send(500).json({response: error})
    }
}

// Show Task

const showtask = async(req,res)=>{
    let list=[];
    try{
       list =  await Todo.find({isDone : false})
    }
    catch(err){
        const error = new HttpResponse("Couldnt Find Task",500)
        return res.send(500).json({result : error})
    }
    res.send(200).json({result : list})
}

exports.addtask = addtask;
exports.deletetask = deletetask;
exports.edittask = edittask;
exports.showtask = showtask;
