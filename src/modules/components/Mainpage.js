import React from 'react'
import Childone from './Childone'
import Childtwo from './Childtwo'

function Mainpage() {
const name="kumar";
let age = 40;

const mycus = ()=>{
    alert("this is parent function");
}

const users=[
    {
        sno:1,
        name:"ravi",
        age:20,
        phone:"845214845",
        working:true,
        myimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s'
    },
    {
        sno:2,
        name:"mohan",
        age:25,
        phone:"8787845",
        working:true
    },
    {
        sno:3,
        name:"pankaj",
        age:54,
        phone:"845214845",
        working:true
    },
    {
        sno:4,
        name:"rohit singh",
        age:35,
        phone:"9878787",
        working:false
    },
    {
        sno:5,
        name:"pooja",
        age:32,
        phone:"55564545",
        working:false
    },
    {
        sno:6,
        name:"singh",
        age:90,
        phone:"55564545",
        working:false
    }
]



  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col bg-dark text-white'>
                <h1>this is parent row</h1>
                <h4>{name} and {age}</h4>
            </div>
        </div>
        <div className='row'>
            <div className='col-6 bg-warning'>
                <h1>this is first child</h1>
                <Childone ename={name} ecolor="orange" myalrt ={mycus} user={users}></Childone>
            </div>
            <div className='col-6 bg-success'>
                <h1>This is second child</h1>
                <Childtwo cusmsg={mycus}></Childtwo>
            </div>
        </div>
    </div>
  )
}

export default Mainpage