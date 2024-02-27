import { Image, ImageProps, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/assets'
import { colors } from '@/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faComment, faStar, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import SvgSwitch from '@/assets/icons/iconSVG/Switch'
import SvgSend from '@/assets/icons/iconSVG/Send'
import SvgComponent from '@/assets/icons/iconSVG/Comments'
import SvgStar from '@/assets/icons/iconSVG/Star'
import Svg3dot from '@/assets/icons/iconSVG/3dot'
import SvgStar2 from '@/assets/icons/iconSVG/Star2'


interface CardViewProps {
  avatar: ImageSourcePropType,
  hour: string,
  title: string,
  description: string,
  tag?: string,
  image: ImageSourcePropType,
  star: number,
  comment: number,
  share: number,
  onPress?: () => void
}
const CardView: React.FC<CardViewProps> = ({ ...props }) => {
  const [focus, setfocus] = useState<Boolean>(false);
  const [like, setLike] = useState<Boolean>(false);
  const handleLike = () => {
    setLike(!like);
    console.log(like)
  }
  const [bgColor, setBgColor] = useState('transparent');
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ width: 450, height: 1, borderWidth: 0.1, backgroundColor: "#E3E3E3" }} />
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Image style={styles.imgCar} source={props.avatar} />
        <View>
          <View style={styles.containerTick}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: colors.black }}>{props.title}</Text>
            <Image style={{ width: 20, height: 20, marginStart: 4 }} source={icons.tick} />
            <TouchableOpacity onPress={props.onPress} style={{ position: "absolute", marginStart: 290 }}>
              <Svg3dot />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, marginStart: 10, marginTop: 3 }}>{props.hour}</Text>
        </View>
      </View>
      <Text style={styles.title}>{props.description}</Text>
      <Text style={styles.tag}>{props.tag ? `#${props.tag}` : ''}</Text>
      <Image style={styles.avatar} source={props.image} />
      <View style={styles.containerAction}>
        <TouchableOpacity onPress={handleLike}>
          {like ? <SvgStar2 /> : <SvgStar />}
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.star}</Text>
        <TouchableOpacity style={styles.space}>
          <SvgComponent />
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.comment}</Text>
        <TouchableOpacity style={styles.space}>
          <SvgSwitch />
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.share}</Text>
        <TouchableOpacity style={styles.space}>
          <SvgSend />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default CardView

const styles = StyleSheet.create({
  space: {
    marginStart: 20
  },
  textAction: {
    fontSize: 14,
    color: colors.black,
    marginStart: 8
  },
  containerAction: {
    flexDirection: "row",
    marginTop: 16,
    marginStart: 20,
    marginBottom: 12
  },
  avatar: {
    width: 370,
    height: 252,
    borderRadius: 20,
    marginTop: 12,
    marginStart: 20,
    justifyContent: "center",
    alignItems: "center"

  },
  tag: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.pink,
    marginStart: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
    marginStart: 20,
  },
  containerTick: {
    flexDirection: "row",
    marginStart: 12
  },
  imgCar: {
    width: 46,
    height: 46,
    borderRadius: 20,
  }
})