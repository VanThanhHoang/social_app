import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '@/theme';
import SvgSwitch from '@/assets/icons/iconSVG/Switch';
import SvgSend from '@/assets/icons/iconSVG/Send';
import SvgComponent from '@/assets/icons/iconSVG/Comments';
import SvgStar from '@/assets/icons/iconSVG/Star';
import Svg3dot from '@/assets/icons/iconSVG/3dot';
import SvgStar2 from '@/assets/icons/iconSVG/Star2';
import AutoHeightImage from 'react-native-auto-height-image';
import Share from 'react-native-share';
import ListImageContent from '@/screens/home/components/ListImageContent';
import {formatPostTime} from '@/utils/time';
import {Media} from '@/type';

interface CardViewProps {
  avatar: string;
  hour: Date;
  title: string;
  description: string;
  tag?: string;
  image: Media[];
  star: number;
  comment: number;
  share: number;
  url?: string;
  onPress?: () => void;
  onPressSwitch?: () => void;
  onPressDetail?: () => void;
  style?: any;
  showView?: boolean;
}
const CardView: React.FC<CardViewProps> = ({...props}) => {
  const [focus, setfocus] = useState<Boolean>(false);
  const [like, setLike] = useState<Boolean>(false);
  const handleLike = () => {
    setLike(!like);
  };
  const onSearch = () => {
    const options = {
      message: 'tesst',
      url: 'https://www.google.com/',
      // email: "thp010620@gmail.com",
      // suject: "test",
      // recipient: "0981649752",
      // title: "test"
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={props.style}>
      {props.showView ? (
        <View
          style={{
            width: 450,
            height: 1,
            borderWidth: 0.1,
            backgroundColor: '#E3E3E3',
          }}
        />
      ) : (
        <View style={{height: 0}} />
      )}
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.imgCar} source={{uri: props.avatar}} />
          <View>
            <View style={styles.containerTick}>
              <Text
                style={{fontSize: 16, fontWeight: '500', color: colors.black}}>
                {props.title}
              </Text>
            </View>
            <Text style={{fontSize: 12, marginStart: 10, marginTop: 3}}>
              {formatPostTime(props.hour)}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={props.onPress}>
          <Svg3dot />
        </TouchableOpacity>
      </View>
      {props.description ? (
        <Text style={styles.title}>{props.description}</Text>
      ) : (
        <View style={{height: 0}} />
      )}
      <Text style={styles.tag}>
        {props.tag ? `#${props.tag}` : <View style={{height: 0}} />}
      </Text>
      {props.image.length === 1 ? (
        <AutoHeightImage
          style={styles.avatar}
          width={370}
          source={{uri: props.image[0].link}}
        />
      ) : props.image.length > 1 ? (
        <ListImageContent medias={props.image} />
      ) : (
        <View style={{height: 0}} />
      )}

      <View style={styles.containerAction}>
        <TouchableOpacity onPress={handleLike}>
          {like ? <SvgStar2 /> : <SvgStar />}
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.star}</Text>
        <TouchableOpacity onPress={props.onPressDetail} style={styles.space}>
          <SvgComponent />
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.comment}</Text>
        <TouchableOpacity onPress={props.onPressSwitch} style={styles.space}>
          <SvgSwitch />
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.share}</Text>
        <TouchableOpacity onPress={onSearch} style={styles.space}>
          <SvgSend />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(CardView);

const styles = StyleSheet.create({
  space: {
    marginStart: 20,
  },
  textAction: {
    fontSize: 14,
    color: colors.black,
    marginStart: 8,
  },
  containerAction: {
    flexDirection: 'row',
    marginTop: 16,
    marginStart: 20,
    marginBottom: 12,
  },
  avatar: {
    borderRadius: 20,
    marginTop: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.pink,
    marginStart: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
    marginStart: 20,
    width: 359,
  },
  containerTick: {
    flexDirection: 'row',
    marginStart: 12,
    justifyContent: 'space-between',
  },
  imgCar: {
    width: 46,
    height: 46,
    borderRadius: 20,
  },
});
