import React from 'react'



class Additem extends React.Component {
    state = (
          {
            taskitems:[],
            title: "",
            description: "",
            deadline: "",
            isDone : false
          })

    render() {

        return (
            <div className="addinput">
                <input className="inputbox" type="text" placeholder="Enter Title" onChange={(e) => this.titlevalueinput(e)} value={this.state.title} />
                <br/>
                <input className="inputbox" type="text" placeholder="Enter Description" onChange={(f) => this.descriptionvalueinput(f)} value={this.state.description} />
                <br/>
                <input className="inputbox" type="text" placeholder="Enter Deadline" onChange={(g) => this.deadlinevalueinput(g)} value={this.state.deadline} />
                <br/>
                <button id="addtaskbtn" onClick={() => this.add()}>Add Task</button>
            </div>

        )

    }

    titlevalueinput(e) {
        this.setState({
            title: e.target.value
        })
    }

    descriptionvalueinput(f) {
        this.setState({
            description: f.target.value
        })
    }

    deadlinevalueinput(g) {
        this.setState({
            deadline: g.target.value
        })
    }

    /// Add Items

    add() {

        console.log("Add function called")

        var url = "http://localhost:5000/api/todo/application/addtask";

        console.log("url fetched")

      fetch(url, {
            method: "POST",
            headers: "Content-type : application/json",
            body: JSON.stringify(
                {
                    title: this.state.title,
                    description: this.state.description,
                    deadline: this.state.deadline
                })
             }).then(()=>{
                 this.extra()
               })
        }

        //Show Task

        async showtask(){
            const response=[]
            var url = "http://localhost:5000/api/todo/application/addtask";
            response = await fetch(url)
            let data = await response.json()
            for (let i = 0; i < data.length; i++) {
              response.push(data[i])
                
            }

            }
            
        
      
      
        //Extra Function

        extra(){
            this.setState({
                taskitems:[],
                title: "",
                description: "",
                deadline: "",
                isDone : false
            })
            this.showtask()
        }
}
export default Additem;


