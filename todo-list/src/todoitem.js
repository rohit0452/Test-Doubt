import React from 'react'
import Additem from './additem';


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
            
            <Additem/>    

        </div>
        )
        
    }

    editbtnclicked(){
        console.log("Edit Button Clicked")
    }

    

}

export default Todolist;