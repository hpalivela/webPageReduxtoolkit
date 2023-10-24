import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import background from '../images/background.jpg'
const Search = () => {
    const tags=[
        {
            id:1,
            name:'All'
        },
        {
            id:2,
            name:'React'
        },
        {
            id:3,
            name:'React Native'
        },
        {
            id:4,
            name:'Angular'
        },
        {
            id:5,
            name:'UI/UX'
        },
    ]
    const[activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='flex justify-center mt-8 flex-col md:px-[150px] px-[70px] '>
       <img src={background} alt="" className=' rounded-2xl h-[350px]'/>
       <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%]
       flex items-center'>
       <AiOutlineSearch className='text-[20px] text-gray-400'/>
        <input placeholder='Search' className='outline-none ml-2'/>
       </div>
       <div className='flex gap-20 justify-center mt-5 '>
        {
            tags.map((item,index)=>{return(
                    <ul onClick={()=>setActiveIndex(index)} className={`${index===activeIndex?'bg-blue-500 text-white':null}
                    p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]
                    border-red-blue transition-all  duration-100 ease-in-out`} key={index}>
                        <li>{item.name}</li>
                    </ul>
            )})
        }
       </div>
    </div>
  )
}

export default Search
