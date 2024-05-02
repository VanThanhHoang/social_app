import * as React from 'react';
import Svg, {SvgProps, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';
const IconFollow2 = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Rect width={20} height={20} fill="#E693BF" rx={10} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M11.125 4.75c.621 0 1.125.505 1.125 1.125a.375.375 0 0 0 .75 0A1.877 1.877 0 0 0 11.125 4a.375.375 0 0 0 0 .75Zm-5.25 9c-.62 0-1.125-.504-1.125-1.125a.375.375 0 0 0-.75 0c0 1.034.84 1.875 1.875 1.875a.375.375 0 0 0 0-.75Zm9.188-7.5a.915.915 0 0 0-.917.916v1.918L9.494 4.452a.78.78 0 0 0-.53-.22.727.727 0 0 0-.729.73c0 .192.073.383.22.53l2.918 2.918c.073.073.11.17.11.265a.352.352 0 0 1-.354.354.373.373 0 0 1-.265-.11L7.373 5.513a.733.733 0 0 0-1.259.53c0 .192.073.384.22.53l3.425 3.448c.073.073.11.17.11.265a.352.352 0 0 1-.354.354.373.373 0 0 1-.266-.11L6.312 7.635a.743.743 0 0 0-.53-.22c-.43 0-.75.35-.75.729 0 .192.073.384.22.53l2.917 2.918c.074.073.11.17.11.265 0 .2-.161.354-.354.354a.374.374 0 0 1-.265-.11l-1.878-1.815a.674.674 0 0 0-.53-.22.75.75 0 0 0-.53 1.28l3.447 3.448A4.113 4.113 0 0 0 11.087 16a4.115 4.115 0 0 0 2.918-1.206l.625-.625A4.663 4.663 0 0 0 16 10.855V7.166a.933.933 0 0 0-.938-.916Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4 4h12v12H4z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconFollow2;
