import React, { useState } from 'react';
import juridentLogo from "../src/assets/JuridentLogo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center md:px-54 px-4 py-4 shadow-md bg-white h-[92px]">
            <div className="text-2xl font-extrabold flex-none">
                <img src={juridentLogo} alt="logo" className="h-14 w-42" />
            </div>
            <div className="hidden md:flex space-x-8 text-gray-700 font-bold">
                <ul className="flex space-x-8 md:pt-4">
                    <li className="hover:text-yellow-600 cursor-pointer">Why Jurident</li>
                    <li className="hover:text-yellow-600 cursor-pointer">How it works</li>
                    <li className="hover:text-yellow-600 cursor-pointer">AI Drafting</li>
                    <li className="hover:text-yellow-600 cursor-pointer">Help</li>
                </ul>
                <div className="flex space-x-4 md:pt-2 ">
                    <button className="bg-black text-white px-6 py-2 rounded-xl font-semibold hover:opacity-80">Explore Jurident</button>
                    <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-xl font-semibold hover:bg-yellow-600 hover:text-white">Book a Demo</button>
                </div>
            </div>
            {/* Burger Icon for Mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg z-10">
                    <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-bold border-1">
                        <li className="hover:text-yellow-600 cursor-pointer">Why Jurident</li>
                        <li className="hover:text-yellow-600 cursor-pointer">How it works</li>
                        <li className="hover:text-yellow-600 cursor-pointer">AI Drafting</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Help</li>
                        <li className="hover:text-yellow-600 cursor-pointer">
                            <button className="bg-black text-white w-full px-4 py-2 rounded-xl font-semibold hover:opacity-80">Explore Jurident</button>
                        </li>
                        <li className="hover:text-yellow-600 cursor-pointer">
                            <button className="border border-yellow-600 text-yellow-600 w-full px-4 py-2 rounded-xl font-semibold hover:bg-yellow-600 hover:text-white">Book a Demo</button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}