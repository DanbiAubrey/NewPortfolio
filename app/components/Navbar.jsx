"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";
import Menu from "./Menu"

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Publications",
        path: "#publications",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact"
    }
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return(
        <nav className="fixed top-0 left-5 right-10 z-10 bg-[#121212] bg-opacity-90"> 
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-5">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">Danielle Sakong</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)}className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <Menu links={navLinks}/>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar