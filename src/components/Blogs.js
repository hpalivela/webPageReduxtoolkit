import React from 'react'
import board from '../images/Board.jpg'
import laps from '../images/laps.jpg'
import laptop from '../images/laptop.jpg'
import mobile from '../images/mobile.jpg'
import robot from '../images/robot.jpg'
import screens from '../images/screens.jpg'
import react from '../images/ReactvsAng.jpg'
import { useNavigate } from 'react-router-dom'

export const lists=[
    {
        image:board,
        tag:'React',
        id:1,
        title:'Angular vs React: Which  Javascript Framework is Right for You?',
        description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
    },
    {
        image:laps,
        tag:'React',
        id:2,
        title:'Angular vs React: Which  Javascript Framework is Right for You?',
        description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
    },
    {
        image:laptop,
        tag:'React',
        id:3,
        title:'Angular vs React: Which  Javascript Framework is Right for You?',
        description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
    },
    {
        image:mobile,
        tag:'React',
        id:4,
        title:'Angular vs React: Which  Javascript Framework is Right for You?',
        description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
    },
    {
        image:robot,
        tag:'React',
        id:5,
        title:'Angular vs React: Which  Javascript Framework is Right for You?',
        description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
    },
    {
        image:screens,
        tag:'React',
        id:6,
        title:'Angular vs React: Which  Javascript Framework is Right for You?',
        description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
    },
    
]

const Blogs = () => {

    const navigate=useNavigate();
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15
    lg:px-32'>
        {
            lists.map((list,index)=>{
                return(
                    <div className='cursor-pointer m-4' onClick={()=>navigate('blogdetails/'+list.id)} key={index}>
                    <img src={list.image} alt='' className='w-full rounded-2xl object-cover h-[200px]'/>
                    <h3  className='mt-3 text-blue-500'>{list.tag}</h3>
                    <h3 className='font-bold mt-3'>{list.title}</h3>
                    <h3 className='line-clamp-3 text-gray-500 mt-3'>{list.description}</h3>
                    <div className='mt-5 flex items-center'>
                        <img src={react} alt='' className='w-[35px] rounded-full'/>
                        <div className='ml-2'>
                            <h3 className='font-bold text-[12px]'>React vs Angular</h3>
                            <h3 className='text-gray-500 text-[10px]'>23 oct 2023</h3>
                        </div>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blogs;

