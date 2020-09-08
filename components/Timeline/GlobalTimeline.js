import React from 'react'
import { useTimelineNodes } from './timeline-stream.js'

export default function GlobalTimeline () {
  const nodes = useTimelineNodes()
  return (
    <div className='absolute bottom-0 w-full px-1 bg-gray-300'>
      <svg className='w-full h-4'>
      </svg>
      {/* <div className='py-1 flex justify-between w-full'>
        {
          nodes.map(node => (
            <div className='bg-black rounded-lg h-1 w-1'>
              {node}
            </div>
          ))
        }
      </div> */}
    </div>
  )

}