import './App.css';
import React,{Component} from 'react';
class App extends Component {


  state={
newTask:""
    ,
    todos:[
 
       {text:"Learn Js "},
       {text:"Learn Java"},
       {text:"Learn Php"},
     ]
 
   }


   deleteTask=(index)=>{

    const todos=[...this.state.todos];
    todos.splice(index,1);
    this.setState({
   todos
    })
    
  
    console.log(this.state)
  
  }



   addTask=()=>{

    const todos =[...this.state.todos];
    todos.push({

      text:this.state.newTask
    });

    this.setState({
      todos
    })

    console.log("added");
    
  }


  updateNewTask=(event)=>{

    this.setState({newTask:event.target.value});



  }

  render(){
    
  
  
  
    return (
    <div className="App">

      <h1>Todo List</h1>

      {this.state.todos.map((todooos,index)=> <li key={index}>

        {todooos.text}

        <button onClick={()=>{this.deleteTask(index)}}>Done</button>
    
      </li>

            

      )}
      
     

      
      
      
 <input type="text" value={this.state.newTask} onChange={this.updateNewTask}></input>
 <button onClick={this.addTask}>Add Task</button>
   
   
   
    </div>
  );
}
}







export default App;

