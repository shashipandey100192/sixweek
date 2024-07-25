import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Myfetchdatapage() {

    const [sv, sf] = useState([])

    const mydata = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((a) => {
            console.log(a);
            return a.json();
        }).then((d) => {
            console.log(d);
            sf(d);
        })
    }

    useEffect(() => {
        mydata();
    }, []);


    return (
        <div className='container-flulid'>
            <div className='row'>
                <div className='col-12'>
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">UserId</th>
                                <th scope="col">Title</th>
                                <th scope="col">Body text</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sv.map((d)=>{
                                return(
                                    <tr key={d.id}>
                                <th scope="row">{d.id}</th>
                                <td>{d.userId}</td>
                                <td>{d.title}</td>
                                <td >{d.body}</td>
                                <td width={200} className='text-center'>
                                    <Link to="" className="btn btn-sm btn-primary">View</Link>
                                    <Link to="" className="btn btn-sm btn-danger ms-2">Del</Link>
                                    <Link to="" className="btn btn-sm btn-warning ms-2">Edit</Link>
                                </td>
                            </tr>
                                )
                            })}
                           
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Myfetchdatapage