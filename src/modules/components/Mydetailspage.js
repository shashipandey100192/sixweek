import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Mydetailspage() {
    const {id}=useParams();

    const [suser,setuser]=useState({})

    const mydatas = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((a)=>{
            console.log(a);
            setuser(a.data);
            
        })
    };
    
    
    useEffect(()=>{
        mydatas();
    },[])
    


  return (
    <div className='container bg-warning'>
        <div className='row'>
            <div className='col-10 p-5'>
                <h1>Id: {suser.id}</h1> 
                
                <h2>Title:{suser.title}</h2>
                <p> Body Text:{suser.body}</p>
            </div>
            <div className='col-2 text-end p-5'>
            <Link to="/dashboard/axiospage" className='btn btn-info'>Back</Link>
            </div>
        </div>
    </div>
  )
}

export default Mydetailspage