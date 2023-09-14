import React from 'react'
import Image from '../assets/profil.jpg'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <div className='h-[780px] bg-[white] lg:h-[800px]'>
    <div className='lg:pl-[40px] section mx-auto' id='home'>
        <div className="container pt-[210px] lg:pt-[270px] lg:pl-[250px] mx-auto">
            <motion.div 
            initial={{ opacity: 0, x: -100}}
            animate={{ opacity:1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 items-center '
            >  
                <div className='h-[200px] w-[200px]'>
                    <img src={Image} alt='IAmBaghas' className='rounded-xl'/>
                </div>
                <div className='flex-1 text-center lg:text-left'>
                    <div className='mb-[-30px] text-[25px] lg:text-[50px] font-semibold uppercase leading-[1]'>
                        <p className='text-black'>
                            Hi Saya
                        </p>
                    </div>
                    <h1 className='uppercase text-[25px] lg:text-[50px] font-bold leading[0.8] text-gray-500'>
                        Aryo Bagas Sasongko
                    </h1>
                </div>
            </motion.div>
        </div>
    </div>
    </div>
  )
}
