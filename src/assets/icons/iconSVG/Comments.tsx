import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#C8C8C8"
        d="M4.828 15.285a1.878 1.878 0 0 1 1.742-.25c1.035.375 2.196.59 3.43.59 4.871 0 8.125-3.145 8.125-6.25S14.871 3.125 10 3.125 1.875 6.27 1.875 9.375c0 1.25.484 2.453 1.395 3.484.335.38.5.88.46 1.387a6.918 6.918 0 0 1-.44 1.93 9.814 9.814 0 0 0 1.538-.887v-.004Zm-4 1.586c.07-.105.137-.21.2-.316.39-.649.761-1.5.835-2.457C.691 12.766 0 11.137 0 9.375 0 4.887 4.477 1.25 10 1.25s10 3.637 10 8.125c0 4.488-4.477 8.125-10 8.125-1.45 0-2.824-.25-4.066-.7a11.57 11.57 0 0 1-2.122 1.196 9.568 9.568 0 0 1-1.957.629c-.03.008-.062.012-.093.02-.172.03-.34.058-.516.074-.008 0-.02.004-.027.004-.2.02-.399.03-.598.03a.625.625 0 0 1-.445-1.066 5.604 5.604 0 0 0 .629-.797l.011-.019h.012Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
