import React from 'react'
import Mynavbar from '../shares/Mynavbar'
import { Outlet } from 'react-router-dom'

function Mylandingpage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <Mynavbar/>
            </div>
            <div className='col-12'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Mylandingpage