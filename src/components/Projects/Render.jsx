import React from 'react'
import { Box, Text, Image } from '../Root/index'
import { JSicon, CSSicon, JENKINSicon, DJANGOicon, DOCKERicon, GRAFANAicon, SLACKicon, REACTicon, Linuxicon } from '../../images/index'

const skills = [
  {
    skill: "JS",
    icon: JSicon
  },
  {
    skill: "CSS",
    icon: CSSicon
  },
  {
    skill: "HTML",
    icon: CSSicon
  },
  {
    skill: "JENKINS",
    icon: JENKINSicon
  },
  {
    skill: "DJANGO",
    icon: DJANGOicon
  },
  {
    skill: "DOCKER",
    icon: DOCKERicon
  },
  {
    skill: "GRAFANA",
    icon: GRAFANAicon
  },
  {
    skill: "SLACK",
    icon: SLACKicon
  },
  {
    skill: "REACT",
    icon: REACTicon
  },
  {
    skill: "LINUX",
    icon: Linuxicon
  },
]

const SkillIcon = ({ name, icon , component}) => {
  return (
    <Box horizontal className='px-4 py-2 text-white justify-between gap-8 bg-slate-200/10 hover:bg-slate-200/30 transition-all ease-in-out duration-300 cursor-default rounded-lg '>
      <Image className='h-8 w-8 my-2' src={icon}></Image>
      {
        component ? <component/> : <Text className="text-2xl font-['ProtoMonoSemi'] py-2">{name}</Text>
      }
    </Box>
  )
}

const Render = () => {
  const splitIndex = Math.ceil(skills.length / 2);

  // Split the array into two parts
  const firstHalf = skills.slice(0, splitIndex);
  const secondHalf = skills.slice(splitIndex);

  return (
    <Box className="bg-black text-white font-['ProtoMono'] py-4">
      <Box>
        <Text className='text-center text-[4.5rem]'>Competencies</Text>
        <Box horizontal className='gap-8 justify-center'>
          {
            firstHalf.map(item => {
              return (
                <SkillIcon name={item.skill} icon={item.icon} />
              )
            })
          }
        </Box>
        <Box horizontal className='gap-8 justify-center mt-4'>
          {
            secondHalf.map(item => {
              return (
                <SkillIcon name={item.skill} icon={item.icon} />
              )
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Render