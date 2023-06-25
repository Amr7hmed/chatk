import React, { useState } from 'react'

function ButtonList() {
    const [statedata,setStateData]=useState("");


    const ChingeState=(data)=>{
        setStateData(data)
    }
    return (
        <div className="dashboard__buttonlist btn-group" role="group" aria-label="Basic example">
            <button type="button" onClick={()=>ChingeState("yours")}
            className={statedata==="yours"?"btn active":"btn"}> Yours </button>
            <button type="button"  onClick={()=>ChingeState("guests")}
            className={statedata==="guests"?"btn active":"btn"}>Guests </button>
        </div>
    )
}

export default ButtonList;