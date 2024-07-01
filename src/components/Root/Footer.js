import React from 'react'
import {Box , Text} from './index'

const Footer = () => {
  return (
    <Box horizontal className="min-h-10 bg-white z-10 font-['ProtoMono'] justify-center">
        <span className="text-[2.5rem] -mt-2.5">&copy;</span>
        <span className="text-[1.7rem] mr-1"> Copyright</span>
    </Box>
  )
}

export default Footer