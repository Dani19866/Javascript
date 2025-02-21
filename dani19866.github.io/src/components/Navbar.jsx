import React, { Component } from 'react'
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.png"

export default class Navbar extends Component {
    render() {
        return (
            <div className='primary_background w-full h-[44px] p-1  items-center text-white'>
                <div className='flex justify-between h-full'>
                    <Link to="/" className="pl-4 flex flex-col justify-center items-center">
                        <div>
                            <span className="font-bold text-[14px]">DANIEL DE OLIVEIRA</span>
                            <span className="text-center text-[10px] hidden md:block">INGENIERO EN SISTEMAS</span>
                        </div>
                    </Link>

                    <div className="inline-flex pr-4 h-full">

                        <div className="md:hidden">
                            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button type="button" className="flex text-sm md:me-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <img src={menuIcon} alt="menu" />
                                </button>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to="/" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                                Inicio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/projects" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                                Proyectos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/skills" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                                Habilidades
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <Link to="/" className='h-full font-bold  items-center justify-center p-3 hover:bg-[#8570ff] hidden md:flex'>
                            INICIO
                        </Link>

                        <Link to="/projects" className='h-full font-bold items-center justify-center p-3 hover:bg-[#8570ff] hidden md:flex'>
                            PROYECTOS
                        </Link>

                        <Link to="/skills" className='h-full font-bold items-center justify-center p-3 hover:bg-[#8570ff] hidden md:flex'>
                            HABILIDADES
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}