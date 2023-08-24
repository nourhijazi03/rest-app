import React, { useState } from "react";
import { MenuList } from "../Helper/MenuList";
import MenuItem from "../Components/MenuItem";
import "../Styles/menu.css";
const Menu =()=>{
    const[cat,setCat]=useState("all");
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="choosing">
                <button onClick={()=> setCat("all")}>All</button>
                <button onClick={()=> setCat("chicken")}>Chicken</button>
                <button onClick={()=> setCat("beef")}>Beef</button>
                <button onClick={()=> setCat("veggie")}>Veggie</button>
            </div>
            <div className="menuList">
                {cat==="all" ? 
                <>
                {MenuList.map((menuItem,key)=>
                {
                    return <MenuItem key={key} image={menuItem.image}  name={menuItem.name} />
                })}
                </>
                :
                <>
                {MenuList.filter((item)=>item.category==cat).map((menuItem,key)=>
                {
                    return <MenuItem key={key} image={menuItem.image}  name={menuItem.name} />
                })} 
                </>
            }
                
                
            </div>

        </div>
    )
}

export default Menu;