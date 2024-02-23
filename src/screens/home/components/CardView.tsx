import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons, images } from '@/assets'
import { colors } from '@/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faComment, faStar, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import SvgSwitch from '@/assets/icons/iconSVG/Switch'
import SvgSend from '@/assets/icons/iconSVG/Send'
import SvgComponent from '@/assets/icons/iconSVG/Comments'
import SvgStar from '@/assets/icons/iconSVG/Star'






// interface CardViewProps {
//   image: ImageProps,
//   hour : string,
//   title: string,
//   }
const CardView = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ width: 450, height: 1, borderWidth: 0.1, backgroundColor: "#E3E3E3" }} />
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Image style={styles.imgCar} source={images.logo} />
        <View>
          <View style={styles.containerTick}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: colors.black }}>Toyota Corolla</Text>
            <Image style={{ width: 20, height: 20, marginStart: 4 }} source={icons.tick} />
          </View>
          <Text style={{ fontSize: 12, marginStart: 10, marginTop: 3 }}>12h</Text>
        </View>
      </View>
      <Text style={styles.title}>Green flag to those people who updates you because they know how you over thinking while waiting for them</Text>
      <Text style={styles.tag}>#mercedes</Text>
      <Image style={styles.avatar} source={images.xe} />
      <View style={styles.containerAction}>
        <TouchableOpacity>
          <SvgStar />
        </TouchableOpacity>
        <Text style={styles.textAction}>1990</Text>
        <TouchableOpacity style={styles.space}>
          <SvgComponent />
        </TouchableOpacity>
        <Text style={styles.textAction}>1990</Text>
        <TouchableOpacity style={styles.space}>
          <SvgSwitch />
        </TouchableOpacity>
        <Text style={styles.textAction}>1990</Text>
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
  textAction:{
    fontSize:14,
    color:colors.black,
    marginStart:8
  },
  containerAction: {
    flexDirection: "row",
    marginTop: 16,
    marginStart: 20,
    marginBottom:12
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
    marginTop: 10
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