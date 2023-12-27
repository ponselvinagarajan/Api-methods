import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
// import Update from './Update';

function Card(){

    const [Users,setUsers]=useState([]);
    const [name,setName]=useState("");
    const postData=((e)=>{
        axios.post("https://jsonplaceholder.typicode.com/users",{name:name})
        // console.log("data posted")

        .then((res)=>{
            // console.log(res)
            setUsers([...Users,res.data])
            setName(" ")
        })

    })
    // Update

    const upBtn=(e)=>{
        e.preventDefault()
        axios.patch(`https:jsonplaceholder.typicode.com/users/${5}` ,{name:name})

        .then((res)=>{
            // setUsers(res.data)
            console.log(res.data);
        })
        console.log("Updated");
    }

    // delete

    const delBtn=(e)=>{
        e.preventDefault()
        axios.delete(`https:jsonplaceholder.typicode.com/users/${5}`,{name:name})

        .then((res)=>{
            // setUsers(res.data)
            console.log(res.data);
        })
        console.log("deleted");
    }
     useEffect(()=>{
          
          axios.get("https://jsonplaceholder.typicode.com/users")

          .then((res)=>{
            setUsers(res.data)
          })
     },[])
     
    return(
        <div className='edit'>
            {
                Users.map((use,i)=>(
       
                    <div key={i}> 
                         <h2>{use.name}</h2>
                    </div>
                   
                 ))
            }
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button  onClick={postData}>Data</button>
            <button onClick={upBtn}>update</button>
            <button onClick={delBtn}>Delete</button>
        </div>

    )
}
export default Card;
