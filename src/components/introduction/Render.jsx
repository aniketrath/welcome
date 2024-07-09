import React from 'react'
import Spline from '@splinetool/react-spline';
import { Box, Text } from '../Root/index'
const Render = () => {
    return (
        <Box id='Introduction' className="relative font-['ProtoMono'] h-[100vh]">
            <Spline scene="https://prod.spline.design/vuPsJU7AuR5olvUQ/scene.splinecode" />
            <Box className='absolute left-[10vw] top-[35vh] rounded-lg'>
                <Text className="text-white text-[4.9rem] font-['ProtoMonoSemi']">
                    Aniket Rath
                </Text>
                <Box horizontal className='gap-4'>
                    <Text className='text-white text-[2.4rem]'>
                        System Engineer @
                    </Text>
                    <Text className='text-cyan-400 text-[2.5rem] font-bold'>
                        Catchpoint
                    </Text>
                </Box>

            </Box>
        </Box>
    )
}

export default Render
