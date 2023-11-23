import React, { Component } from 'react'
import './App.css'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      todoList:[],
      activeItem:{
        id:null,
        title:'',
        completed:false,
      },
      editing:false,
    }
    
  }
    getCookie=(name)=> {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue
    }
      
  componentDidMount(){

    this.fetchTasks()
  }
  fetchTasks=()=>{

    console.log('fetching ....');
    fetch('http://127.0.0.1:8000/api/task-list')
    .then(response => response.json())
    .then(data => {
      console.log("data is ", data);
      this.setState({todoList:data})
    })
    .catch(function(err){
      console.log(err)
    })

  
  }

  editTask=(task)=>{

    this.setState({
      activeItem:task,
      editing:true,
    })

  }


  deleteTask=(task)=>{
    let csrftoken = this.getCookie('csrftoken');
    fetch(`http://127.0.0.1:8000/api/task-delete/${task.id}`,{
      method:'DELETE',
      headers:{'Content-type':'application/json','X-CSRFToken': csrftoken},
      
    })
    
    .then(()=>{
      this.fetchTasks()
    })
    .catch(function(err){
      console.log(err)
    })

  }
  editStrike=(task)=>{
    let csrftoken = this.getCookie('csrftoken');
    task.completed=!task.completed

    fetch(`http://127.0.0.1:8000/api/task-update/${task.id}`,{
      method:'POST',
      headers:{'Content-type':'application/json','X-CSRFToken': csrftoken},
      body:JSON.stringify({

        id:task.id,
        title:task.title,
        completed:task.completed,
      })
      
    })
    .then(()=>{
      this.fetchTasks()
    })
    .catch(function(err){
      console.log(err)
    })

  }



  handleChange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    console.log(name)
    console.log(value)
    this.setState({
      activeItem:{...this.state.activeItem,title:value}
    })
    
  }
  handlesubmit=()=>{
    console.log('item',this.state.activeItem)

    let csrftoken = this.getCookie('csrftoken');
  
    let url='http://127.0.0.1:8000/api/task-create'
    if(this.state.editing===true){
    
      url =`http://127.0.0.1:8000/api/task-update/${this.state.activeItem.id}`
      
      this.setState({editing:true,})
    }
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json','X-CSRFToken': csrftoken},
      body:JSON.stringify(this.state.activeItem)
    })
    .then(response=>{

      this.fetchTasks()
      this.setState({
        activeItem:{
          id:null,
          title:'',
          completed:false,
        }
      })
    }).catch(function(err){
      console.log(err)
    })
   
  }


  render() {
    var tasks=this.state.todoList
    return (
      <div className="container ">
        <h1 className='display-3 text-center text-primary fw-light'>TODO APP</h1>
      <div className="task-container d-flex flex-column justify-content-center align align-items-center ">

        <div className="input-group mb-4 w-75 ">
          

          <input type="text" onChange={this.handleChange} className='form-control' name="title" value={this.state.activeItem.title}/>
          <button type='submit' onClick={this.handlesubmit}  className='btn btn-outline-primary  '><i className="fa-solid fa-plus"></i></button>
          
        </div>
      {tasks.map((task,key)=>
        
      <div className="list-wrapper col-12 col-md-6 "key={key}>
        <div className="list-group">
        <label className="list-group-item d-flex gap-2 shadow p-3 mb-2  rounded-3 text-bg-primary row">

        <span className='col-md-9 text-capitalize 'onClick={()=>this.editStrike(task)} > 
          {
          
          (task.completed===true) ? <del style={{ color: 'black' }}>{task.title}</del> :task.title
          
          
          }
        </span>
        <span className='col-md-1'> 
       
        <i className="fa-solid fa-user-pen text-light"  style={{cursor:"pointer"}} onClick={()=>this.editTask(task)}></i>
        </span>
        <span className='col-md-1'> 
        <i className="fa-solid fa-trash" style={{cursor:"pointer"}} onClick={()=>this.deleteTask(task)}></i>
        </span>
      </label>
        </div>
      </div>
      )}
  
    </div>
    </div>
    )
  }
}
