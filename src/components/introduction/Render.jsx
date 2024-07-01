import React from 'react'
import Spline from '@splinetool/react-spline';
import { Box, Text } from '../Root/index'
const Render = () => {
    return (
        <Box className="relative font-['ProtoMono']">
            <Spline className='h-[100vh]' scene="https://prod.spline.design/tbBLbmnBGWC7rizh/scene.splinecode" />
            <Box className='absolute left-[10vw] top-[35vh]'>
                <Text className="text-white text-[4.9rem] font-['ProtoMonoSemi']">
                    Aniket Rath
                </Text>
                <Text className='text-white text-[2.9rem]'>
                    Web Developer
                </Text>
            </Box>
        </Box>
    )
}

export default Render
