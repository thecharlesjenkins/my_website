import React, {useRef} from "react"
import SvgComponent from "./test"
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';

const top_blue_animation = (ref, ratio) => {
    ref.current.style.transform =
     `translate(${1000*ratio-1000}px, 0px)`;
}
const top_orange_animation = (ref, ratio) => {

}
const top_pink_animation = (ref, ratio) => {

}
const lower_orange_animation = (ref, ratio) => {

}
const upper_red_animation = (ref, ratio) => {

}
const lower_red_animation = (ref, ratio) => {

}
const bottom_blue_animation = (ref, ratio) => {

}
const bottom_green_animation = (ref, ratio) => {

}

const useAnimationRefs = () => (
    {
        top_blue_ref: [useRef(null), top_blue_animation],
        top_orange_ref: [useRef(null), top_orange_animation],
        top_pink_ref: [useRef(null), top_pink_animation],
        lower_orange_ref: [useRef(null), lower_orange_animation],
        upper_red_ref: [useRef(null), upper_red_animation],
        lower_red_ref: [useRef(null), lower_red_animation],
        bottom_blue_ref: [useRef(null), bottom_blue_animation],
        bottom_green_ref: [useRef(null), bottom_green_animation],    
    }
);

const ClimbingAnimation = () => {
    let animationRefs = useAnimationRefs();
    const handleChange = (entry) => {
        console.log(entry.intersectionRatio);
        Object.values(useAnimationRefs).forEach((value) => {
            value[1](value[0], entry.intersectionRatio);
        })
      };
    const [intersection] = useIntersectionObserver(handleChange, { threshold: [...Array(100).keys()].map(i => (i + 1) / 100) });

    let ref={
        intersection: intersection,
    }

    Object.entries(animationRefs).forEach(entry => {
        const [key, value] = entry;
        ref[key] = value;
    })

    return (<SvgComponent ref={animationRefs}/>);
}

export default ClimbingAnimation;
