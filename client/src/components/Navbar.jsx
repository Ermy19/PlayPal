import { useState } from 'react';
import { HiMenu, HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import logo from '../../images/PlayPal1.png';

const NavbarItem = ({ title,classProps }) => {
    return(
        <li class={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav class="w-full flex md:justify-center justify-between items-center p-2">
            <div class="md:flex-[0.5] flex-initial justify-center items-center">

                <img src={logo} alt="logo" />

            </div>

            <ul class="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tournament", "Wallets", "Tutorials"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                
                <li class="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        Login
                    </li>
            </ul>
            
            <div class ="flex relative">
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} class = "text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                        : <HiMenuAlt4 fontSize={28} class = "text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                        {toggleMenu &&(
                            <ul
                                className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-scren shadow-2xl md:hidden list-none
                                flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                            >
                                <li class="text-xl w-full my-2">
                                    <AiOutlineClose onClick={() => setToggleMenu(false)} /> 
                                </li>
                                {["Market", "Exchange", "Tournament", "Wallets", "Tutorials"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                ))}
                            </ul>
                        )}
                    
            </div>
            

        </nav>
    );
}

export default Navbar;