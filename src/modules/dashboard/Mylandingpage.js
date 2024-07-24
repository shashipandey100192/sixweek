import React from 'react'
import Mynavbar from '../shares/Mynavbar'
import { Outlet } from 'react-router-dom'
import Myfooterpage from '../shares/Myfooterpage'
import Mysidebar from '../shares/Mysidebar'

function Mylandingpage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Mynavbar />
        </div>
      </div>

      <div className='row cus-nav'>
        <div className="col-md-2">
          <Mysidebar/>
        </div>
        <div className='col-md-10 border cus-h'>
          <Outlet></Outlet>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <Myfooterpage />
        </div>
      </div>
    </div>
  )
}

export default Mylandingpage