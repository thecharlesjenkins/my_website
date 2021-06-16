import React, {useRef} from "react"
import { linearAnimation } from "../../util/animations"

const ClimbingSvg = React.forwardRef((props, ref) => (
    <svg height="60%" width="60%" ref={ref.intersection} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <filter id="prefix__c" x="-500%" y="-500%" width="1000%" height="1000%">
          <feGaussianBlur in="SourceAlpha" />
          <feOffset dx={2} dy={4} />
          <feComponentTransfer result="offsetblur">
            <feFuncA type="linear" />
          </feComponentTransfer>
          <feFlood floodColor="rgba(0,0,0,0.3)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="prefix__b" x="-500%" y="-500%" width="1000%" height="1000%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={4} />
          <feOffset dx={-15} dy={4} />
          <feComponentTransfer result="offsetblur">
            <feFuncA type="linear" slope={1.24} />
          </feComponentTransfer>
          <feFlood floodColor="rgba(0,0,0,0.3)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          cx={231.956}
          cy={200.524}
          r={156.869}
          id="prefix__a"
          spreadMethod="pad"
          gradientTransform="translate(3.119 1.248)"
        >
          <stop offset={0} />
          <stop offset={1} />
        </radialGradient>
      </defs>
      <path
        d="M133.165 112.895a13.115 13.115 0 11-5.614-24.966v13.114z"
        css="fill:rgb(66, 230, 245)"
        ref={ref.top_blue_ref}
      />
      <path
        css="fill:#e57017"
        stroke="transparent"
        d="M135.66 124.123l17.466 12.476 9.981-30.566-6.862-7.485z"
        ref={ref.top_orange_ref}
      />
      <path
        d="M179.15699999999998 140.902a8.688 8.867-68.963 10-6.237 16.218 8.688 8.867-68.963 106.237-16.218zM177.91 144.146a5.213 5.32-68.963 01-3.743 9.73 5.213 5.32-68.963 013.743-9.73z"
        css="fill:#d921d0"
        ref={ref.top_pink_ref}
      />
      <path 
        css="fill:#e57017" 
        d="M183.068 174.028h18.714v14.97h-18.714z" 
        ref={ref.lower_orange_ref}
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M218.453 201.468c-7.615-3.67-3.83-1.324-22.486-3.53-10.238-1.211-2.789 20.043 19.62 23.474 4.358.668 12.162-3.719 15.196-6.927"
        stroke="transparent"
        css="fill:#c10202"
        ref={ref.upper_red_ref}
      />
      <circle cx={214.881} 
        cy={239.525} 
        r={7.537} 
        css="fill:#c10202" 
        ref={ref.lower_red_ref}
      />
      <ellipse
        cx={238.897}
        cy={278.823}
        rx={10.916}
        ry={3.743}
        css="fill:#42e6f5"
        ref={ref.bottom_blue_ref}
      />
      <path
        d="M247.189 302.291l-8.465 4.994-8.028-6.335 3.503-8.91 10.193.83z"
        css="fill:#15b70c"
        ref={ref.bottom_green_ref}
      />
      <path
        d="M78.205 86.812c98.549 8.47 116.81 94.296 176.368 251.456l137.37 9.895c-177.733-293.397.637-.339-178.697-292.782L78.205 86.812z"
        paintOrder="stroke"
        stroke="url(#prefix__a)"
        css="fill:#6b634f"
        filter="url(#prefix__b)"
        ref={ref.wall_ref}
      />
      <path
        d="M289.291 437.718c-28.426-11.246-70.431-138.533-70.431-138.533"
        stroke="#000"
        css="fill:transparent"
        ref={ref.rope_ref}
      />
      <circle cx={213} 
        cy={270} 
        r={7.537} 
        css="fill:#d8d8d8"
        ref={ref.head_ref}
      />
      <ellipse
        cx={213.912}
        cy={295.402}
        rx={10.769}
        ry={23.574}
        css="fill:#d8d8d8"
        filter="url(#prefix__c)"
        ref={ref.person_ref}
      />
    </svg>
  )
);

const top_blue_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 70, y: 50}, .5, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const top_orange_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 100, y: 0}, .1, .6);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const top_pink_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 30, y: -50}, 0, .8);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const lower_orange_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 70, y: -50}, .36, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const upper_red_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 34, y: -10}, .5, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const lower_red_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 60, y: 50}, .1, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const bottom_blue_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 70, y: 35}, .5, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const bottom_green_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 40, y: -40}, .5, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const wall_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: -100, y: -40}, 0, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}
const person_animation = (ref, ratio) => {
  let curr = linearAnimation(ratio, {x: 10, y: -120}, .1, .9);
  ref.current.style.transform =
   `translate(${curr.x}px, ${curr.y}px)`;
}

export const useAnimationRefs = () => (
  {
      top_blue_ref: [useRef(null), top_blue_animation],
      top_orange_ref: [useRef(null), top_orange_animation],
      top_pink_ref: [useRef(null), top_pink_animation],
      lower_orange_ref: [useRef(null), lower_orange_animation],
      upper_red_ref: [useRef(null), upper_red_animation],
      lower_red_ref: [useRef(null), lower_red_animation],
      bottom_blue_ref: [useRef(null), bottom_blue_animation],
      bottom_green_ref: [useRef(null), bottom_green_animation],
      wall_ref: [useRef(null), wall_animation],
      person_ref: [useRef(null), person_animation],
      rope_ref: [useRef(null), person_animation],
      head_ref: [useRef(null), person_animation],
  }
);

export default ClimbingSvg
