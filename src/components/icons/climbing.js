import React, {useRef} from "react"
import SvgComponent from "./test"
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';
import { linearAnimation } from "../../util/animations"

const top_blue_animation = (ref, ratio) => {
    let curr = linearAnimation(ratio, {x: 70, y: 50}, .5, .9);
    console.log(curr)
    ref.current.style.transform =
     `translate(${curr.x}px, ${curr.y}px)`;
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

    return (<SvgComponent ref={ref}/>);
}

export default ClimbingAnimation;
