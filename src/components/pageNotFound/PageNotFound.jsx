import React from 'react'
import Error404 from '../../assets/images/404Error.png';

const PageNotFound = () => {
  return (
    <div className='flex max-w-screen-2xl lg:h-full h-screen items-center justify-center'>
      <img src={Error404} alt="" className='lg:w-1/2 lg:h-1/2'/>
    </div>
  )
}

export default PageNotFound
