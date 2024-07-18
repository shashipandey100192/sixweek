import React from 'react'

function Myloginpage() {
    return (
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-sm-5 '>
                    <div className='container-fluid border bg-light shadow p-5 rounded'>
                        <div className='row'>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
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

export default Myloginpage