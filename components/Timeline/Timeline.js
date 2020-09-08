import { addTimeline } from './timeline-stream'
import { useEffect } from 'react'

export default function Timeline({name}) {
  useEffect(() => {
    addTimeline(name)
  }, [])
  return null
}