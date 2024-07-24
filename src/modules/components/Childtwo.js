import React from 'react'

function Childtwo(props) {
  return (
    <div className='container-fluid bg-info'>
        <div className='row'>
            <div className="col">
                <h1>second child</h1>
                <button onClick={props.cusmsg}> show msg</button>
            </div>
        </div>
    </div>
  )
}

export default Childtwo