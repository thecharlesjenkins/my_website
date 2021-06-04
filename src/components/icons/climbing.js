import React, {useRef} from "react"
import SvgComponent from "./test"
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';


const ClimbingAnimation = () => {
    const top_blue_ref = useRef(null)
    const handleChange = (entry) => {
        console.log(entry.intersectionRatio)
        console.log(top_blue_ref)
        if (top_blue_ref.current) {
            top_blue_ref.current.style.transform = `translate(${entry.intersectionRatio * 10}px, ${entry.intersectionRatio * 10}px)`
        }
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      };
    // let observer = new IntersectionObserver(callback, options);
    // let target = document.querySelector('#wall');
    const [ref] = useIntersectionObserver(handleChange, { threshold: [...Array(100).keys()].map(i => (i + 1) / 100) });

    // observer.observe(target);
    return (<SvgComponent ref={ref} top_blue_ref={top_blue_ref}/>)
}

export default ClimbingAnimation;
