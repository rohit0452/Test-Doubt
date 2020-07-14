import React from 'react'



class Todolist extends React.Component{

    render(){
        return(
         <div className="main">
            <div className="todoitem">
                <div className="Title">{this.props.title}</div>
                <div className="Description">{this.props.description}</div>
                <div className="Deadline">{this.props.deadline}</div>
                <button className="del-edit-btn" onClick={()=>this.editbtnclicked()}>Edit</button>
                <button className="del-edit-btn" onClick={()=>this.editbtnclicked()}>Delete</button>
   </div>
   </div>
  
        )}

        editbtnclicked(){
            window.alert("Edit Button Clicked")
        }

        
 }
  

export default Todolist;