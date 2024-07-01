import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { Box, Button, Text, TextInput } from '../Root/index'

const Render = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <Box className="bg-black text-white font-['ProtoMonoSemi'] text-center">
            <Text className='text-[4rem]'> Contact Details</Text>
            <Box className='relative'>
                <Spline scene="https://prod.spline.design/21RcArU2pDaqpgeN/scene.splinecode" />
            </Box>
            <Box className='absolute w-full h-full'>
                <Box className=' backdrop-blur-2xl outline-none border-spacing-2 border-4 h-[48vh] w-[28vw] mx-auto mt-[22vh] rounded-xl p-4 shadow-[0_0_30px_rgba(255,255,255,1)]'>
                    <Text className='text-3xl mb-6'>
                        Email
                    </Text>
                    <form className='px-10 flex flex-col gap-4 mb-6'>
                        <TextInput
                            placeholder='e-mail'
                            value={email}
                            className='outline-none border-2 border-spacing-2 rounded-lg w-full'
                            onChange={(e) => setEmail(e)}
                        />
                        <TextInput
                            placeholder='message'
                            multiline={true}
                            value={message}
                            className='outline-none border-2 border-spacing-2 rounded-lg w-full min-h-[20vh]'
                            onChange={(e) => setMessage(e)}
                        />
                        <Button className='border-none outline outline-2 outline-white text-bold
                        px-6 py-3 text-xl hover:bg-cyan-200/60 hover:text-black w-fit mx-auto
                         transition-all ease-in-out duration-150 mt-4'> Submit</Button>
                    </form>
                </Box>
                <Box className='backdrop-blur-2xl outline-none border-spacing-2 border-4 h-[16vh] w-[28vw] mx-auto mt-[2vh] rounded-xl p-4 shadow-[0_0_30px_rgba(255,255,255,1)]'>
                    <Text className='text-3xl mb-6'>
                        Socials
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Render