import React from 'react'
import { Popup, Card, Image, } from 'semantic-ui-react'
import Web from '../assets/porto.png'
import Placeholder from '../assets/questionmark.png'
import { motion } from 'framer-motion'
import 'semantic-ui-css/semantic.min.css'

export const Project = () => {

  return (
    <div className='pt-6 lg:pt-5 pl-6 lg:p-10 h-[920px] lg:h-[400px] bg-white'>
        <div className='' id='project'>
            <h1 className='text-2xl lg:text-4xl uppercase font-bold pl-[7px] justify-center lg:mx-auto lg:flex pb-10' >
                Projects 
            </h1>
        </div>
        <div className='mx-auto flex flex-col lg:flex-row lg:gap-x-10 items-center lg:pl-[220px] gap-y-10 pr-5'>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity:1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.25 }}
            >
                <Popup
                    trigger={
                    <Card>
                        <Image src={Web} />
                        <Card.Content>
                        <Card.Header>Web Portofolio</Card.Header>
                        <Card.Description>
                            Project Tugas pembuatan web statis berisikan Portofolio diri
                        </Card.Description>
                        </Card.Content>
                    </Card>
                    
                    }
                >
                    <Popup.Header>iambaghas.github.io</Popup.Header>
                </Popup>
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity:1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
                <Popup
                    trigger={
                    <Card>
                        <Image src={Placeholder} />
                        <Card.Content>
                        <Card.Header>In Work</Card.Header>
                        <Card.Description>
                            -
                        </Card.Description>
                        </Card.Content>
                    </Card>
                    
                    }
                >
                    <Popup.Header>-</Popup.Header>
                </Popup>
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity:1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.75 }}
            >
                <Popup
                    trigger={
                    <Card>
                        <Image src={Placeholder} />
                        <Card.Content>
                        <Card.Header>In Work</Card.Header>
                        <Card.Description>
                            -
                        </Card.Description>
                        </Card.Content>
                    </Card>
                    
                    }
                >
                    <Popup.Header>-</Popup.Header>
                </Popup>
            </motion.div>
        </div>
    </div>
  )
}