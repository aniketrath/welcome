import React, { useState, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import { Box, Button, Text, TextInput, Image } from '../Root/index'
import emailjs from '@emailjs/browser';
import { GITHUBicon2,INSTAicon, LINKEDINicon } from '../../images/index'
const Render = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const [message, setMessage] = useState('')

    const git_url= "https://github.com/aniketrath"
    const linkedin_url = "https://www.linkedin.com/in/aniket-rath-19b04a195/"
    const insta_url = "https://www.instagram.com/kyouske_ryuga/"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('aniketrath', 'template_6ibb6cm', form.current,
                {
                    publicKey: 'ftF360_E2pqkIB6kl',
                })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setEmail('');
                    setName('');
                    setMessage('')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
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
                    <form ref={form} onSubmit={sendEmail} className='px-10 flex flex-col gap-4 mb-6'>
                        <TextInput
                            placeholder='e-mail'
                            name='user_email'
                            value={email}
                            className='outline-none border-2 border-spacing-2 rounded-lg w-full'
                            onChange={(e) => setEmail(e)}
                        />
                        <TextInput
                            placeholder='Name'
                            name='user_name'
                            value={name}
                            className='outline-none border-2 border-spacing-2 rounded-lg w-full'
                            onChange={(e) => setName(e)}
                        />
                        <TextInput
                            placeholder='Message'
                            name='message'
                            multiline={true}
                            value={message}
                            className='outline-none border-2 border-spacing-2 rounded-lg w-full h-40'
                            onChange={(e) => setMessage(e)}
                        />
                        <Button type='submit' className='border-none outline outline-2 outline-white text-bold
                        px-6 py-3 text-xl hover:bg-cyan-200/60 hover:text-black w-fit mx-auto
                        transition-all ease-in-out duration-150 mt-4'> Submit</Button>
                    </form>
                </Box>
                <Box className='backdrop-blur-2xl outline-none border-spacing-2 border-4 h-[18vh] w-[28vw] mx-auto mt-[2vh] rounded-xl p-4 shadow-[0_0_30px_rgba(255,255,255,1)]'>
                    <Text className='text-3xl mb-6'>
                        Socials
                    </Text>
                    <Box horizontal className=' justify-evenly gap-4'>
                        <Box className=' bg-transparent h-14 w-14 rounded-full'>
                            <Button onClick={()=>  window.open(git_url, '_blank', 'noopener,noreferrer')}
                            id='github' 
                            className='p-0.5'>
                                <Image className='p-0.5' src={GITHUBicon2} />
                            </Button>
                        </Box>
                        <Box className=' bg-transparent h-14 w-14 rounded-full'>
                            <Button onClick={()=>  window.open(linkedin_url, '_blank', 'noopener,noreferrer')} 
                            id='insta'>
                                <Image src={LINKEDINicon} />
                            </Button>
                        </Box>
                        <Box className=' bg-transparent h-14 w-14 rounded-full'>
                            <Button onClick={()=>  window.open(insta_url, '_blank', 'noopener,noreferrer')}
                            id='linkedin'>
                                <Image src={INSTAicon} />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Render