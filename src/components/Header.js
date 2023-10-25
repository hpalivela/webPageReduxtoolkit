import React from 'react'
import logo from '../logo.svg';
import {AiFillYoutube } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate();
    const clickHandler=()=>{
        alert('hello');

    }
    const AboutusHandler=()=>{
        window.scrollTo(0, document.body.scrollHeight);
    }
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} alt="" className='w-[80px]'/>
      
      <ul className='flex gap-4 md:gap-12'>
        <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('/')}>Home</li>
        <li className='hover:font-bold cursor-pointer' onClick={AboutusHandler}>About Us</li>
        <li className='hover:font-bold cursor-pointer' onClick={AboutusHandler}>Contact Us</li>
      </ul>
      
      <button className='bg-blue-500 rounded-full w-[100px] text-white flex items-center'onClick={clickHandler}>Subscribe
      <AiFillYoutube className='ml-3 text-[30px]' />
      </button>
    </div>
  )
}

export default Header
