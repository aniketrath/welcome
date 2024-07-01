import React from 'react'
import { Box, Button } from './index'
const Header = () => {
    return (
        <Box horizontal className="justify-center fixed w-full text-white text-[1.5rem] gap-4 z-10 font-['ProtoMono']">
            <Box horizontal className=' w-fit bg-black py-3 gap-4 rounded-b-xl px-6 shadow-[0_0_20px_rgba(255,255,255,0.7)]'>
                <Button className='hover:bg-slate-100/90 hover:text-black px-4 py-2 transition-all ease-in-out duration-300'>Introduction</Button>
                <Button className='hover:bg-slate-100/90 hover:text-black px-4 py-2 transition-all ease-in-out duration-300'>Experiences</Button>
                <Button className='hover:bg-slate-100/90 hover:text-black px-4 py-2 transition-all ease-in-out duration-300'>Projects</Button>
            </Box>
        </Box>
    )
}

export default Header


