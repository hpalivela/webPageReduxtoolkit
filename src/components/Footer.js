import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       <div className='bg-gray-200 text-center'>
        <h1 className='text-[14px] p-10'> <Link to='https://www.google.com/' target='_blank'><span className='font-bold text-decoration-line: underline cursor-pointer'>Need help?</span></Link>
         Email : hello@react.com<br></br>
Copyright © 2023 React</h1>
    </div>
    </div>
  )
}

export default Footer
