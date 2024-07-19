import React from 'react'

function Myregistorpage() {
    return (
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-sm-8 '>
                    <div className='container-fluid border bg-light shadow p-5 rounded'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h3>Registor page</h3>
                                <hr />
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">Course</label>
                                    <select className="form-select">
                                        <option> Mern</option>
                                        <option> Mean</option>
                                        <option> Java</option>
                                        <option> Excel</option>
                                        <option> Express</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label><br/>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="Male"/>
                                            <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="Female"/>
                                            <label class="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                    <input type='button' value="login" className="btn btn-success" />
                                    <input type='button' value="cancel" className="btn btn-danger ms-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myregistorpage