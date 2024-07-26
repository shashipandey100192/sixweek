import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


function Myregistorpage() {

    const {register,handleSubmit,formState: { errors }} = useForm()
       

const myformsubmit = (a)=>{
    console.log(a);
}

    return (
        <form onSubmit={handleSubmit(myformsubmit)}>
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
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true})} name='email' />
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" {...register("fullname",{required:true})} name='fullname'/>
                                    {errors.fullname && <p className='text-danger'>Full Name is required</p>}
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="text" className="form-control" {...register("phone")} name='phone'/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" {...register("dob")} name='dob'/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label className="form-label">Course</label>
                                    <select className="form-select" {...register("course")} name='course'>
                                        <option> Mern</option>
                                        <option> Mean</option>
                                        <option> Java</option>
                                        <option> Excel</option>
                                        <option> Express</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="Male" {...register("gender")}/>
                                            <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="Female" {...register("gender")}/>
                                            <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    <input type='submit' value="login" className="btn btn-success" />
                                    <input type='button' value="cancel" className="btn btn-danger ms-3" />
                                    <Link to="/dashboard">dashboard</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Myregistorpage