import React, { useState } from 'react';
import { TextField,Button, textFieldClasses } from '@mui/material';
import './Todo.css'

function Todo() {

  const [todolist,setTodolist]=useState([])
  const [todo,setTodo]=useState("")
 

  const handlechange=(e)=>{
    e.preventDefault()
    // console.log(todo);
    setTodo(" ")
  }


  const deleteHandle=(id)=>{
   setTodolist(todolist.filter((lists)=>lists.id!=id))
  }

const handleComplete=(id)=>{
  // alert("clicked")
let complete =todolist.map((lists)=>{
if(lists.id===id){
  return({...lists,status:!lists.status})
}
return lists
})
setTodolist(complete)
}

   
  return (
    <div style={{}}  className='w-100  d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor:'#B5CB99',width:'420px'}} className='mt-5'>
        <h2 className='text-center mt-3'>To Do List</h2>
          <form onSubmit= {handlechange}  >
      <div className='mt-4 ms-4 mb-4'>
            <TextField style={{width:'70%'}}  id="filled-basic" label="" variant="filled"  onChange={(event)=>setTodo(event.target.value)} value={todo||""} />
            <Button onClick={()=>setTodolist([...todolist,{list:todo,id:Date.now(),status:false}])} type='submit' style={{height:'55px',borderColor:'black',width:'20%',color:'black'}} className='ms-2 '  variant="outlined">Add</Button>
           
     </div>  
     </form>
     <div>
     
       {
      
        todolist.map((item)=>{
          return(
            
         <div style={{height:'50px',backgroundColor:'white'}} className='d-flex align-items-center justify-content-between m-4 p-3'>
              <p  style={{fontSize:'20px'}} className={item.status?'list-complete':""}  >{item.list}  </p> 
           <div className='icon '>

              <i onClick={()=>{
                deleteHandle(item.id)
              }}  className="fa-solid fa-trash-can fa-lg me-3"></i>

              <i onClick={()=>{
                handleComplete(item.id)
              }}  className="fa-solid fa-circle-check fa-lg me-3 "></i>

           </div>  
         </div>
        )  
        })
       }
     </div>
     <div>
     </div>
        </div>
    </div>
  )
}

export default Todo
