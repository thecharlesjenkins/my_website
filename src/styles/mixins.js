import { css } from "styled-components";

const mixins = {
    underlineAnimation: css`
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 10px;
        background-color: #000;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
      &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
      &:hover {
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
    `,
  }

export default mixins