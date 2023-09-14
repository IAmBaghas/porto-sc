import React from 'react'

export const Nav = () => {
  return (
    <div className="overflow-hidden bg-white fixed top-0 w-full z-[9999]">
      <header>
        <div className='text-center text-xl text-black block lg:text-2xl no-underline font-semibold'>
            <div className="float-center p-2 lg:float-right">
                <a className="p-3 text-gray-600 hover:text-gray-500" href='#home'>Home</a>
                <a className="p-3 text-gray-600 hover:text-gray-500" href='#about'>About</a>
                <a className="p-3 text-gray-600 hover:text-gray-500" href='#project'>Project</a>
            </div>
        </div>
      </header>
    </div>
  )
}
