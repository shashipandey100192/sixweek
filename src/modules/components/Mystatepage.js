import React,{useState} from 'react'
import { FcHome } from "react-icons/fc";

function Mystatepage() {

const [statevariable,statefucntion]=useState("kumar");

const mychan = ()=>{

    statefucntion("this is  change value");
}

const first = (myelement)=>{
        console.log(myelement.target.value);
        statefucntion(myelement.target.value)

}


  return (
    <div className='container-fluid bg-warning'>
    <div className='row'>
        <div className='col-12'>
            <h1>use of state and Life</h1>
            <input type='button' value="change data" onClick={mychan} />
            <input type='text' value={statevariable} onInput={first}/>
            <h1>{statevariable}</h1>

            <h1><FcHome/></h1>
        </div>
        </div>
    </div>
  )
}

export default Mystatepage