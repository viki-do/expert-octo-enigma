import gsap from "gsap";

import { scrollTigger } from "gsap/all"
gsap.registerPlugin(scrollTigger);

export const animateWithGsap = (target, animationProperties, scrollProperties) => {
  gsap.to(target, {
    ...animationProperties,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProperties,
    }
  })
  
}

export const animateWithGsapTimeline = (timeline, rotationReference, rotationState, firstTarget, secondTarget, animationProperties) => {
  timeline.to(rotationReference.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
})

  timeline.to(
    firstTarget,
    {
      ...animationProperties,
      ease: "power2.inOut",
  },
  '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProperties,
      ease: "power2.inOut",
  },
  '<'
  )
}