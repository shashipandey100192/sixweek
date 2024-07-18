import React,{Fragment} from "react";

function Mypage()
{
    return <h1>welcome to reactjs</h1>
}

export default Mypage

let name = "kumar singh";
const age = 30;
let course = "BCA"

export function Mypage1()
{
    return <Fragment> 
                <h2>wecome to  name export function {name} {age}</h2>
                 <h3>skdfjjksdhf {course}</h3>
             </Fragment>
}

export function Mypage2()
{
    return(
        <Fragment>
            <h1>this is react js</h1>
            <h2>use of jsx expression </h2>
        </Fragment>
    )
}
