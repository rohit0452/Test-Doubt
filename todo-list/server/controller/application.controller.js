const HttpResponse=require('../models/http-response')
const Todo = require('../models/todomodels');
const { response } = require('express');



//Add Task

const addtask = async(req,res)=>{
    const {title , description , deadline} = req.body;
    console.log(req.body);

    var createdTask =new  Todo({
        title , 
        description,
         deadline
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

exports.addtask = addtask;
exports.deletetask = deletetask;
exports.edittask = edittask;
