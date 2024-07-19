import React from 'react'
import { Link } from 'react-router-dom'

function Myerrorpage() {
  return (
    <div className='container-fluid back'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1 className='errheading'>404</h1>
                <h3>Not Found Page</h3>
                <Link to="/" className='btn btn-danger'>Back to Home page</Link>
            </div>
        </div>
    </div>
  )
}

export default Myerrorpage