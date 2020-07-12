import React from 'react'
import Todolist from './todoitem'
import { json } from 'express'
class Additem extends React.Component{
    state=(
        {
         title : "",
         description : "",
         deadline : "",
        })
    
    render(){
     
        return(
            <div className="addinput">
            <input className="inputbox" type="text" placeholder="Enter Title" onChange={(e)=> this.titlevalueinput(e)} value={this.state.title}> </input>
             <br></br>
            <input className="inputbox" type="text" placeholder="Enter Description" onChange={(f)=> this.descriptionvalueinput(f)} value={this.state.title}></input>
            <br></br>
            <input className="inputbox" type="text" placeholder="Enter Deadline" onChange={(g)=> this.descriptionvalueinput(g)} value={this.state.title}></input>
            <br></br>
            <button id="addtaskbtn" onClick={this.add()}>Add New Task</button>
        </div>

        )

    }

    titlevalueinput(e){
        this.setState({
            title : e.target.value
        })
    }
   
    descriptionvalueinput(f){
        this.setState({
            description : f.target.value
        })
    }

    deadlinevalueinput(g){
        this.setState({
            deadline : g.target.value
        })
    }

    add(){
       var url="http://localhost:5000/api/todo/addtask"
       fetch(url , {
           method : "POST" , 
           headers : "Content-type : application/json",
           body : JSON.stringify({
               title : this.state.title,
               description : this.state.description,
               deadline : this.state.deadline
           })
       }).then(()=>{
           this.blank()
       })
           
     }

     blank(){
         this.setState({
            title : "",
            description : "",
            deadline : "",
         })
     }
  
} 
export default Additem;