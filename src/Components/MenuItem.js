import React from "react";

const MenuItem =({name,image})=>{
    return (
        <div className="menuItem">
            <div style={{backgroundImage: `url(${image})`}}>
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default MenuItem;