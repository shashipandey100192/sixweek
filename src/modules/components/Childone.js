import React from 'react'

function Childone(props) {
  return (
    <div className='col bg-danger p-3'>Childone
    <h2>{props.ename}</h2>
    <input type='button' value="show msg" onClick={props.myalrt}/>
    <select>
    {props.user.map((d)=>{
        return(
            <option>{d.age}</option>
        )
    })}
    </select>
    <select>
    {props.user.map((d)=>{
        return(
            <option>{d.name}</option>
        )
    })}
    </select>
    <select>
    {props.user.map((d)=>{
        return(
            <option>{d.phone}</option>
        )
    })}
    </select>
    <select>
    {props.user.map((d)=>{
        return(
            <option>{d.working ? "Yes":"No"}</option>
        )
    })}
    </select>

    

    </div>
  )
}

export default Childone