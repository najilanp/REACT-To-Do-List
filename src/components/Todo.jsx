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
    <div className='w-full flex justify-center items-center'>
      <div style={{backgroundColor:'#B5CB99',width:'420px'}} className='mt-5'>
        <h2 className='text-center mt-3 text-2xl'>To Do List</h2>
        {/* <h1 className='text-red-500  text-5xl'>hiii</h1> */}


          <form onSubmit= {handlechange}  >
         <div className='mt-4 ml-4 mb-4'>
            <TextField   style={{width:'70%',marginRight:'20px'}}  id="filled-basic" label="" variant="filled"  onChange={(event)=>setTodo(event.target.value)} value={todo||""} />
            <Button onClick={()=>setTodolist([...todolist,{list:todo,id:Date.now(),status:false}])} type='submit' style={{height:'55px',borderColor:'black',width:'20%',color:'black'}}   variant="outlined">Add</Button>
           
       </div>  
     </form>
     <div>
     
       {/* {
        todolist.map((item)=>{ */}
          {/* return( */}

            {
                todolist.length>0?
                todolist.map((item)=>(
                  <div style={{height:'50px',backgroundColor:'white'}} className='flex items-center justify-between m-4 p-3'>
                  <p  style={{fontSize:'20px',textTransform:'capitalize'}} className={item.status?'list-complete':"" } >{item.list}  </p> 
               <div className='icon '>
    
                  <i onClick={()=>{
                    deleteHandle(item.id)
                  }}  className="fa-solid fa-trash-can fa-lg me-3"></i>
    
                  <i onClick={()=>{
                    handleComplete(item.id)
                  }}  className="fa-solid fa-circle-check fa-lg mr-3 "></i>
    
               </div>  
             </div>
            )  
            ): <p></p>
                }
        
        {/* }) */}
       {/* } */}
     </div>
     <div>
     </div>
        </div>
    </div>
  )
}

export default Todo
