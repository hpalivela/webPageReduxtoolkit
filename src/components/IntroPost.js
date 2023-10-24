import React from 'react'
import react from '../images/ReactvsAng.jpg'
import { useNavigate } from 'react-router-dom';


const IntroPost = () => {
    const navigate=useNavigate();
    const lists=[
        {
            id:1,
            tag:'React',
            title: 'Angular vs React: Which  Javascript Framework is Right for You?',
            description: 'Both platforms are open source, use component-based architecture, and are used to develop interfaces for both web and mobile. Other similarities include client and server-side rendering, comparable performance levels, and quick and easy updates.Angular is a much more complex platform that is more suitable for experienced developers. On the other hand, React is very easy to learn and is more accessible for new developers, utilizing JSX to easily combine JavaScript and HTML. JSX is a syntax extension to JavaScript that allows developers to structure component rendering using syntaxes they are familiar with. JSX is very similar to HTML in appearance.' 
        }
    ]

  return (
    <div>{
        lists.map((list,index)=>{
            return(
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15
                lg:px-32 gap-8 cursor-pointer' onClick={()=>navigate('/')} key={index} >
                    <img src={react} alt='' className='rounded-2xl object-cover w-full h-full'/>
                    <div>
                        <h4 className='text-blue-500'>{list.tag}</h4>
                        <h2 className='text-[23px] font-bold mt-5'>{list.title}</h2>
                        <h4 className='line-clamp-8 text-gray-400 mt-5'>{list.description}</h4>
                        <div className='mt-5 flex items-center'>
                        <img src={react} alt='' className='w-[70px] rounded-full'/>
                        <div className='ml-2'>
                            <h3 className='font-bold'>React vs Angular</h3>
                            <h3 className='text-gray-500'>23 oct 2023</h3>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default IntroPost
