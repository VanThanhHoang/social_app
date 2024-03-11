import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const PlantIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M19.46 9.685a.375.375 0 0 1 .587.387C19.215 13.748 15.924 16.5 12 16.5a8.217 8.217 0 0 1-2.457-.375.375.375 0 0 1-.037-.703 52.503 52.503 0 0 0 5.132-2.607c1.663-.955 3.273-2 4.822-3.13ZM.904 12.165c.196-.262.427-.537.689-.822a.742.742 0 0 1 1.245.24c0 .008.005.015.008.022a.738.738 0 0 1-.148.753c-1.066 1.172-1.238 1.805-1.194 1.939.093.104.799.323 2.725-.166a19.203 19.203 0 0 0 1.553-.466 8.288 8.288 0 0 1-.916-1.277l-.025-.042A8.221 8.221 0 0 1 3.797 7.36C4.245 3.226 7.753 0 12 0a8.22 8.22 0 0 1 4.988 1.682 8.316 8.316 0 0 1 2.148 2.43c.007.014.016.028.024.041.26.455.478.934.648 1.43.175-.151.343-.303.506-.453.252-.234.476-.45.676-.656 1.386-1.418 1.55-2.138 1.507-2.27-.094-.105-.728-.276-2.279.06a.742.742 0 0 1-.728-.248l-.017-.021a.738.738 0 0 1 .406-1.192c.368-.083.74-.148 1.115-.194 1.44-.165 2.383.119 2.802.844.152.262.298.707.128 1.34-.252.941-1.15 2.082-2.42 3.277a26.09 26.09 0 0 1-1.317 1.155 38.52 38.52 0 0 1-2.614 1.963 52.91 52.91 0 0 1-5.026 3.079 49.08 49.08 0 0 1-4.323 2.074c-.412.17-.816.33-1.21.476-.557.207-1.096.39-1.608.543l-.052.016c-1.206.359-2.223.547-3.022.562H2.25c-1.014 0-1.702-.3-2.043-.89-.426-.733-.191-1.703.697-2.883Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={12}
        x2={12}
        y1={0}
        y2={16.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5E4EA0" />
        <Stop offset={1} stopColor="#DC92B9" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M24 0H0v16.5h24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default PlantIcon