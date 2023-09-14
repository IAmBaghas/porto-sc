import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaWhatsappSquare, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='bg-white h-[75px]'>
        <div>
            <hr className='w-[90%] h-1 mx-auto' />
            <div className='lg:px-[100px] lg:py-5 py-3 mx-auto'>
                <div className='lg:float-right mx-auto flex flex-row gap-x-3 items-center content-center justify-center'>
                    <a href='https://www.linkedin.com/in/aryo-bagas-sasongko-25701925b/' alt='LinkedIn' target='Linkedin'><FaLinkedin color={'black'} size={'32px'}/></a>
                    <a href='https://www.instagram.com/iambaghas/?hl=id' alt='Instagram' target='Instagram'><FaInstagramSquare color={'black'} size={'32px'}/></a>
                    <a href='https://wa.me/+6289654316536' alt='WhatsApp' target='Phone'><FaWhatsappSquare color={'black'} size={'32px'}/></a>
                    <a href='mailto:iambaghas@gmail.com' alt='Email' target='Gmail'><FaEnvelope color={'black'} size={'32px'}/></a>
                </div>
                <div className="lg:float-left pt-3 items-center content-center flex justify-center  ">
                    <p>
                        © Copyright <span className='font-bold'>IAmBaghas</span> . All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
