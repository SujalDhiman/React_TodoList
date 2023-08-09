import { useState } from "react"
import "./Card.css"

function Card({index,title,onHandle}){

    const [status,setStatus]=useState("Pending")

    function changeStatus(){
        status === "Pending"?setStatus("Completed"):setStatus("Pending")
    }

    return (
        <div className="todoCard">
            <h2>{index}. {title}</h2>
            <h3>Status {status}</h3>
            <button className="statusBtn" onClick={changeStatus}>Update Status</button>
            <button className="removeBtn" onClick={onHandle}>Remove Button</button>
        </div>
    )

}

export {Card}