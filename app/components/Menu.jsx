import React from "react";
import NavLink from "./NavLink";

const Menu = ({links}) => {
    return(
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
            ))
            }  
        </ul>
    )
}
export default Menu;