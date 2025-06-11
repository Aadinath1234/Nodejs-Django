import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
      <div className="navbar bg-[#9CBCF8] shadow-sm rounded-4xl  ">
      <div className="navbar-start">
        <div className=" bg-[#9CBCF8]">
       <Link to='/'> <img src="\assets\name.png" alt="logo" className="w-70 h-20" /></Link>
        </div>
        

        <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/salary">Salary</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/form">Job Form</Link></li>
      </ul>
    </div>


      </div>
      <div className="navbar-center hidden lg:flex justify-center items-center font-[Gilroy] text-white ">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center text-lg">
         <Link to='/dashboard'>
         <li className="  text-[#31AEF3] bg-white rounded-4xl p-4 text-lg">
            Dashboard
          </li>
         </Link> 
         <Link to="/people">
         <li>
            <a>People</a>
          </li>
         </Link> 
          
        <Link to="/salary">
         <li>
            <a>Salary</a>
          </li>
        </Link> 
        <Link to="/form">
        <li>
            <a>Form </a>
          </li>
        </Link>
          
        </ul>
      </div>
      <div className="navbar-end flex flex-row ">
        <div className="flex flex-row gap-4 p-4 w-40 justify-center items-center">
          <div className="rounded-2xl p-2 bg-white">
            <Link to="/login"><p>Login</p></Link>
          </div>

          <div className="rounded-2xl p-2 bg-white">
            <Link to="/signup"><p>Signup</p></Link>
          </div>
          <div>
            <img src="\assets\Frame 2610930.png" alt="notification" />
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Navbar;
