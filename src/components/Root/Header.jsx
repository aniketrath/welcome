import React from 'react'
import { Box, Button } from './index'
const Header = () => {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Box horizontal className="justify-center fixed w-full text-white text-[1.5rem] gap-4 z-10 font-['ProtoMono'] transition-all ease-in-out duration-200">
            <Box horizontal className=' w-fit bg-black py-3 gap-4 rounded-b-xl px-6 shadow-[0_0_35px_rgba(255,255,255,0.7)]'>
                <Box className='hover:bg-gray-300/10 rounded-lg px-2'>
                    <Button onClick={() => handleClickScroll("Introduction")} className='bg-gradient-to-r from-orange-500 to-violet-500 via-red-400
                    text-transparent bg-clip-text px-3 py-3 transition-colors ease-in-out duration-300'>  Introduction</Button>
                </Box>
                <Box className='hover:bg-gray-300/10 rounded-lg px-2'>
                    <Button onClick={() => handleClickScroll("Experience")} className='bg-gradient-to-r from-orange-500 to-violet-500 via-red-400
                text-transparent bg-clip-text px-3 py-3 transition-colors ease-in-out duration-300'> Experience </Button>
                </Box>
                <Box className='hover:bg-gray-300/10 rounded-lg px-2'>
                    <Button onClick={() => handleClickScroll("Projects")} className='bg-gradient-to-r from-orange-500 to-violet-500 via-red-400
                text-transparent bg-clip-text px-3 py-3 transition-colors ease-in-out duration-300'> Projects </Button>
                </Box>
                <Box className='hover:bg-gray-300/10 rounded-lg px-2'>
                    <Button onClick={() => handleClickScroll("Contact")} className='bg-gradient-to-r from-orange-500 to-violet-500 via-red-400
                text-transparent bg-clip-text px-3 py-3 transition-colors ease-in-out duration-300'>  Contact</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Header


