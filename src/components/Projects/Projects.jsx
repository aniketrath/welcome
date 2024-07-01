import React from 'react'
import { Box, Text, Image, Button } from '../Root/index'
import { GITHUBicon } from '../../images/index'
import {Harmonya ,LoginUI ,Cryptos} from '../../images/projects/index'

const projects = [
  {
    id: 1,
    Title: "Harmonya",
    About: "My First Project !! An Sample website based on Product Advertisements . Includes multiple routes for showcasing multiple scenarios for website statuses . ",
    Link: 'https://aniketrath.github.io/Harmonya/',
    Image: Harmonya
  },
  {
    id: 2,
    Title: "Cryptos",
    About: "A Full scale Project based on React & Django frameworks. Also scalable on Docker / Kubernetes . The application is based on the idea to create an platform to compare Cryptocurrencies and NFTs.",
    Link: 'https://github.com/aniketrath/cryptos_',
    Image: Cryptos

  },
  {
    id: 3,
    Title: "Login.UI",
    About: "A Simple Project based on React and Express showcasing minimal UI/UX for an Login screen ans using Express for Minimal Login Authentication. requires to be locally hosted.",
    Link: 'https://github.com/aniketrath/Login.uI',
    Image: LoginUI
  },
  
]

const Projects = () => {

  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box horizontal className=' justify-center gap-20'>
      {
        projects.map(item => {
          return (
            <Box className=' bg-stone-900 w-[24vw] h-[46vh] rounded-xl p-4 relative transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]'>
              <Box className='h-[5vh] w-[5vh] bg-black rounded-full absolute top-6 right-6 transition-shadow hover:shadow-[0_0_20px_rgba(12,10,9,1)]'>
                <Button onClick={()=> handleClick(item.Link)}>
                  <Image className='p-1.5' src={GITHUBicon}></Image>
                </Button>
              </Box>
              <Box className='rounded-lg'>
              <Image src={item.Image}></Image>
              </Box>
              <Text className="font-['ProtoMono] font-bold text-[2rem] mt-3 mb-2 ">{item.Title}</Text>
              <Text>{item.About}</Text>
            </Box>
          )
        })
      }
    </Box>
  )
}

export default Projects