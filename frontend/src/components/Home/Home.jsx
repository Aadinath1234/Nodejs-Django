import React from 'react'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div>
        <div>
            <Navbar />
            </div>

            <div className='w-screen max-md:h-full'>
                <img src="\assets\base.jpg" alt="homepage"
                 className='max-lg:h-screen'
                />
            </div>

      
    </div>
  )
}

export default Home
