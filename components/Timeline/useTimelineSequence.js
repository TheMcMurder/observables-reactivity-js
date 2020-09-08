import { useRef, useEffect, useLayoutEffect } from "react";
import { addTimelineNode } from './timeline-stream.js'

const useTimelineSequence = (slideRef) => {
  const timelineNodes = useRef()

  useLayoutEffect(() => {
    timelineNodes.current = Array.from(
      slideRef.current.querySelectorAll("[timeline-node]")
    );
    if (timelineNodes.current.length > 0 ) {
      addTimelineNode(timelineNodes.current[0])
    }
  }, []);
};

export default useTimelineSequence;
