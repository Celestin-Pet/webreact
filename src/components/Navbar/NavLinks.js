import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PageDropdown from '../packages.js'; // Import the PageDropdown component

const NavLinks = () => {
    return (
        <div className="flex space-x-2"> {/* Adjust space-x value */}
            <HashLink className="px-2 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#home">
                Home
            </HashLink>            
            <PageDropdown />                    
                           
            <HashLink className="px-2 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-2 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#place">
                Collections
            </HashLink>
            <HashLink className="px-2 font-extrabold text-gray-500 hover:text-green-900" smooth to="/contact">
                Contact 
            </HashLink>
            <HashLink className="text-white bg-green-900 hover:bg-green-700 inline-flex items-center justify-center w-auto h-6 px-2 py-2 shadow-xl rounded-xl" smooth to="/get-demo">
                Login {/* Adjust width and padding values */}
            </HashLink>
        </div>
    );
};

export default NavLinks;
