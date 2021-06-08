import React from "react"
import ClimbingSvg, { useAnimationRefs } from "./climbingsvg"
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';

const ClimbingAnimation = () => {
    // Collect animations from the climbinsvg file
    let animationRefs = useAnimationRefs();
    const handleChange = (entry) => {
        Object.values(animationRefs).forEach((value) => {
            value[1](value[0], entry.intersectionRatio);
        })
      };
    const [intersection] = useIntersectionObserver(handleChange, { threshold: [...Array(100).keys()].map(i => (i + 1) / 100) });

    let ref={
        intersection: intersection,
    }

    Object.entries(animationRefs).forEach(entry => {
        const [key, value] = entry;
        ref[key] = value[0];
    })

    console.log(ref)

    return (<ClimbingSvg ref={ref}/>);
}

export default ClimbingAnimation;
