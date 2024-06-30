import React from 'react'
import { Box, Button } from './index'
const Header = () => {
    return (
        <Box horizontal className=' justify-center fixed top-4 w-full text-white text-[1.5rem] gap-4 z-10'>
            <Button className='hover:bg-slate-100/90 hover:text-black px-4 py-2 transition-all ease-in-out duration-300'>Introduction</Button>
            <Button className='hover:bg-slate-100/90 hover:text-black px-4 py-2 transition-all ease-in-out duration-300'>Experiences</Button>
            <Button className='hover:bg-slate-100/90 hover:text-black px-4 py-2 transition-all ease-in-out duration-300'>Projects</Button>
        </Box>
    )
}

export default Header