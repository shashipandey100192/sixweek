import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Myloginpage() {
    const {register,handleSubmit,formState: { errors }} = useForm()
    const navigat = useNavigate();



const myloign = (e)=>{
    console.log(e);
    if(e.email==="admin@gmail.com" && e.password==="12345")
    {
        // window.location.href="http://google.com";
        navigat('/dashboard')
    }
    else
    {
        alert("user and password not match");
    }



}


    return (
        <form>
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-sm-5 '>
                    <div className='container-fluid border bg-light shadow p-5 rounded'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h3>Login page</h3>
                                <hr/>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password' {...register("password",{required:true,minLength:5,maxLength:10})} maxLength="10"/>
                                    {errors.password?.type === "required" && <p className='text-danger'>password is required</p>}
                                    {errors.password?.type === "minLength" && <p className='text-warning'>minimum length 5 </p>}
                                    {errors.password?.type === "maxLength" && <p className='text-success'>minimum length 10 </p>}
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                   <input type='button' value="login" className="btn btn-success" onClick={handleSubmit(myloign)}/>
                                   <input type='button' value="cancel" className="btn btn-danger ms-3" />
                                   <Link to="registor">Registor now</Link>
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

export default Myloginpage