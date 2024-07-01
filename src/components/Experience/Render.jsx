import React from 'react'
import { Box, Text } from '../Root/index'
import { Building } from 'iconsax-react'
import { ArchiveBook } from 'iconsax-react'
import Timeline from './Experiece'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Render = () => {
  return (
    <Box className="bg-black text-white font-['ProtoMono']">
      <Box>
        <Text className="text-center text-[4.5rem] font-['ProtoMonoSemi']">
          Timeline
        </Text>
        <VerticalTimeline>
          {
            Timeline.map(element => {
              let isWork = element.icon === 'work'
              return (
                <VerticalTimelineElement
                  id={element.id}
                  key={element.id}
                  date={element.date}
                  iconStyle={{ background: 'black' }}
                  icon={isWork ? <Building
                    size="36"
                    color="#d9e3f0"
                  /> : <ArchiveBook
                    size="36"
                    color="#d9e3f0"
                  />}
                >
                  <h3 className="vertical-timeline-element-title text-black text-2xl font-['ProtoMonoSemi']">{element.title}</h3>
                  <Box horizontal className=' justify-between '>
                    <Text className="vertical-timeline-element-subtitle text-slate-600 text-md font-['ProtoMonoSemi']">{element.company}</Text>
                    <Text className="vertical-timeline-element-subtitle text-slate-600 text-md font-['ProtoMonoSemi']">{element.location}</Text>
                  </Box>

                  <Text className='text-black'> {element.workDes}</Text>

                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
      </Box>
    </Box>
  )
}

export default Render