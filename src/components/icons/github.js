import React from "react"

const IconGithub = ({ size, title }) => (
  <svg
    className="raise"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 120 120"
  >
    <title>{title}</title>
    <g>
      <path d="M 32.966635,114.3721 C 13.619643,104.75843 0.03472725,82.741627 0.03472725,61 0.03472725,28.644389 27.644389,1.0347272 60,1.0347272 c 32.355611,0 59.96527,27.6096618 59.96527,59.9652728 0,21.847785 -13.63901,43.86601 -33.100608,53.43617 -11.256585,5.53538 -11.26357,5.52982 -11.872295,-9.44677 -0.291067,-7.161183 -1.03765,-13.421246 -1.75,-14.673659 -1.713389,-3.012382 -1.737424,-2.980962 2.840277,-3.712966 5.863814,-0.937661 13.38531,-5.038671 16.335729,-8.906869 6.900106,-9.046506 7.650027,-23.998372 1.682891,-33.55353 -0.902158,-1.444625 -1.371362,-4.259765 -1.211618,-7.269494 0.143386,-2.701529 -0.03388,-6.253098 -0.393928,-7.892376 -0.869926,-3.960748 -4.256807,-3.967672 -12.073833,-0.02468 -5.133833,2.589559 -6.359445,2.840413 -9.890921,2.024446 -5.1752,-1.19576 -15.886728,-1.19576 -21.061928,0 -3.531476,0.815967 -4.757088,0.565113 -9.890921,-2.024446 -7.817026,-3.94299 -11.203907,-3.936066 -12.073833,0.02468 -0.360046,1.639278 -0.537314,5.190847 -0.393928,7.892376 0.159744,3.009729 -0.30946,5.824869 -1.211618,7.269494 C 22.869725,48.992725 22,52.277904 22,58.868914 22,67.87214 24.350257,74.404246 29.406187,79.453043 33.353728,83.395016 41.386119,87 46.221823,87 c 1.500822,0 1.817224,0.431609 1.282883,1.75 -0.390099,0.9625 -1.14155,2.942418 -1.66989,4.399818 -1.606432,4.431261 -8.576813,5.193106 -13.978003,1.52776 -1.882254,-1.277332 -3.97005,-2.139832 -4.639546,-1.916667 C 26.54777,92.984077 26,92.652609 26,92.024316 26,91.396024 26.45,91.160081 27,91.5 c 0.55,0.339919 1,0.196576 1,-0.318538 0,-1.340526 -2.721404,-3.418596 -3.238859,-2.4732 -0.238343,0.435456 -0.308852,0.262139 -0.156687,-0.385149 0.36028,-1.532577 -1.460293,-2.997843 -4.750954,-3.823746 -4.103775,-1.029982 -4.638573,1.335471 -0.953898,4.219163 1.741462,1.362898 4.278805,4.673431 5.63854,7.356739 3.129542,6.175851 6.985438,8.340781 14.753941,8.283711 l 5.792084,-0.0426 -0.292084,6.59179 c -0.367286,8.28898 -1.466958,8.61109 -11.825448,3.46388 z M 38,99 c 0,-0.55 0.45,-1 1,-1 0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 -0.55,0 -1,-0.45 -1,-1 z m -5,-1.059017 c 0,-0.582459 0.45,-0.780902 1,-0.440983 0.55,0.339919 1,0.816476 1,1.059017 C 35,98.801558 34.55,99 34,99 33.45,99 33,98.523442 33,97.940983 Z m 9.8125,0.375903 c 0.721875,-0.288871 1.584375,-0.253344 1.916667,0.07895 0.332291,0.332292 -0.258334,0.568641 -1.3125,0.52522 -1.164943,-0.04798 -1.4019,-0.284941 -0.604167,-0.604167 z M 29,96 c 0,-0.55 0.45,-1 1,-1 0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 -0.55,0 -1,-0.45 -1,-1 z"></path>
    </g>
  </svg>
)

const github = ({ size, title }) => IconGithub({ size, title })

export default github;
