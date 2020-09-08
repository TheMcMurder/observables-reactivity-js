/*
- Finds all `Appear` children and controls when they appear based on if the slide is active
- The animation between slides is defined and controlled here
*/
import React, { useRef } from "react";
import cls from "classnames";
import useAppearSequence from "./useAppearSequence";
import useTimelineSequence from './Timeline/useTimelineSequence'
import GlobalTimeline from './Timeline/GlobalTimeline.js'

export default function Slide({ children, isActive, ...props }) {
  const slideRef = useRef();

  useAppearSequence(slideRef, isActive);
  // useTimelineSequence(slideRef);

  return (
    <section
      ref={slideRef}
      className={cls(
        "slide w-screen h-screen absolute transition-opacity duration-300 transform",
        {
          "opacity-100 translate-y-0": isActive,
          "opacity-0 translate-y-full invisible": !isActive,
        }
      )}
      aria-current={isActive ? "step" : null}
      {...props}
    >
      <div className='relative p-2 h-full w-full flex items-center justify-center'>
        <div>{children}</div>
        <GlobalTimeline />
      </div>
    </section>
  );
}
