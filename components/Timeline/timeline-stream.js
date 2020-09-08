import { Subject, ReplaySubject } from 'rxjs';
import { tap, scan, reduce, shareReplay } from 'rxjs/operators';
import { useState, useEffect } from 'react'

const timelines = new Subject()

export const addTimeline = (name) => {
  timelines.next(name)
}

export const Timelines$ = timelines.asObservable().pipe(
  scan((acc, name) => {
    if (name != undefined) {
      acc.push(name)
    }
    return acc
  }, []),
  shareReplay(1),
)

export const useTimelineNodes = () => {
  const [nodes, setNodes ] = useState([])
  useEffect(() => {
    const sub = Timelines$.subscribe(
      (nodes) => {
        console.log('nodes', nodes)
        setNodes(nodes)
      },
      (err) => {
        console.error(err)
        setNodes([])
      }
    )
    return () => sub.unsubscribe()
  })
  return nodes
}