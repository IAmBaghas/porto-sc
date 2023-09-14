import React from 'react'
import { Card, Timeline } from 'antd';
import { FaAws, FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className='pt-6 lg:pt-5 pl-6 lg:p-10 h-[1090px] lg:h-[600px] bg-gray-300' id='about'>
        <div>
            <h1 className='text-2xl lg:text-4xl uppercase font-bold pl-[7px] justify-center lg:mx-auto lg:flex pr-4 ' >
                About Me
            </h1>
        </div>
        <div className='pr-[65px] lg:pl-[290px] relative'>
            <motion.div 
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100}}
                whileInView={{ opacity:1, x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className='flex flex-col lg:flex-row mx-auto h-[258px] w-[10x] lg:w-[1000px] gap-y-[10px] lg:gap-x-20 pt-7'
            >
                <Card
                    title="Biodata"
                    bordered={true}
                    style={{
                    width: 350,
                    }}
                >
                    <p>Name<span className='ml-[23px]'>: Aryo Bagas Sasongko</span></p>
                    <p>Age <span className='ml-[35px]'>: 17</span></p>
                    <p>Address <span className='ml-2'>: Megamendung, Kabupaten Bogor, <span className='ml-[72px]'>Jawa Barat</span></span></p>
                    <p>Sex <span className='ml-[35px]'>: Male</span></p>
                </Card>
                <Card
                    title="Academic"
                    bordered={true}
                    style={{
                    width: 350,
                    }}
                >
                    <Timeline
                        items={[
                        {
                            color   : 'black',
                            children: 'SD Negeri 1 Cisarua (2013 - 2019)',
                        },
                        {
                            color   : 'black',
                            children: 'SMP Negeri 1 Megamendung (2019 - 2022)',
                        },
                        {
                            color   : 'black',
                            children: 'SMK Negeri 4 Bogor : Software and Game Development (2022 - Now)',
                        },
                        ]}
                    />
                </Card>
            </motion.div>
            <motion.div 
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 100}}
                whileInView={{ opacity:1, x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className='flex flex-col lg:flex-row mx-auto h-[240px] w-[10x] lg:w-[1000px] gap-y-[10px] lg:gap-x-20 pt-[315px] lg:pt-10'
            >
                <Card
                    title="Achievement"
                    bordered={true}
                    style={{
                    width: 350,
                    }}
                >
                    <Timeline
                        items={[
                        {
                            color   : 'black',
                            children: '1st Place in Lomba Kompetensi Siswa 2023 : Cloud Computing Kota Bogor',
                        },
                        {
                            color   : 'black',
                            children: 'Participant in Lomba Kompetensi Siswa 2023 : Cloud Computing Jawa Barat',
                        },
                        ]}
                    />
                    <p></p>
                    <p> </p>
                </Card>
                <Card
                    title="Experience"
                    bordered={true}
                    style={{
                    width: 350,
                    }}
                >
                    <div className='flex mx-auto items-center gap-x-4 pt-1'>
                        <FaAws size={70}/>
                        <FaReact size={70}/>
                        <FaJsSquare size={70}/>
                        <FaHtml5 size={70}/>
                        <FaCss3Alt size={70}/>
                    </div>
                </Card>
            </motion.div>
        </div>
    </div>
  )
}
