import { useState } from "react";
import Menubutton from "./Menubutton";
import Menuitems from "./Menuitems";

export default function Menu({buttontext,items}){

    const[ toggle,setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        }

    return(
        <div className="container">
        <Menubutton buttontext={buttontext} toggle = {handleToggle}/>
        {toggle && <Menuitems items={items}/>}
        </div>
    )
}