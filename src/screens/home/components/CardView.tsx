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
import {Media, Reposter} from '@/type';
import {useAppDispatch} from '@/redux/store';
import {NewfeedAction} from '@/redux/action/newfeed.action';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SearchStackNames} from '@/navigation/SearchNavigator/config';
import {HomeStackNames} from '@/navigation/HomeNavigator/config';
import {AppStackNames} from '@/navigation/config';
import {use} from 'i18next';
import { useAppSelector } from '@/redux/store';
import { userInfoSelector } from '@/redux/test/userStore';
import ProfileScreen from '@/screens/profileScreens/ProfileScreen';
import { ProfileStackNames } from '@/navigation/ProfileNavigator/config';


interface CardViewProps {
  userName: string;
  rootPostId?: string;
  resposter?: Reposter;
  _id: string;
  avatar: string;
  hour: Date;
  userId: string;
  title: string;
  description: string;
  tag?: string;
  image: Media[];
  star: number;
  comment: number;
  url?: string;
  onPress?: () => void;
  onPressSwitch?: () => void;
  onPressDetail?: () => void;
  onPressCommentShow?: () => void;
  style?: any;
  isLike: boolean;
  showView?: boolean;
}

const CardView: React.FC<CardViewProps> = ({...props}) => {
  const userInfor = useAppSelector(userInfoSelector);
  const [focus, setfocus] = useState<Boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const appDispatch = useAppDispatch();
  const handleLike = (id: string) => {
    appDispatch(NewfeedAction.likePost(id));
  };
  const onUserNamePress = (userId: string, userName: string,): void => {
    console.log('userId1', userId);
    if (userId === userInfor._id) {
      console.log('userId2', userId);
       navigation.navigate(AppStackNames.HomeNavigator, {
      screen: HomeStackNames.ProfileNavigator,
      params: {userId: userId, userName: userName},
    });
    }else{
      console.log('userId2', userId);
      navigation.navigate(AppStackNames.HomeNavigator, {
      screen: HomeStackNames.UserProfileDetail,
      params: {userId: userId, userName: userName},
    });
    }
  };
  const onSearch = () => {
    const options = {
      message: `VNPIC * Bài viết của ${props.title}`,
      url: 'https://sever-social-media-app.onrender.com/web/post/' + props._id,
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
      {props.resposter ? (
        <RepostHeader
          reposter={props.resposter}
          onUserNamePress={onUserNamePress}
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
            <TouchableOpacity
              onPress={() => {
                onUserNamePress(props.userId, props.title);
              }}
              style={styles.containerTick}>
              <Text
                style={{fontSize: 16, fontWeight: '500', color: colors.black}}>
                {props.title ? props.title : props.userName}
              </Text>
            </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => {
            handleLike(props._id);
          }}>
          {props.isLike ? <SvgStar2 /> : <SvgStar />}
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.star}</Text>
        <TouchableOpacity
          onPress={props.onPressCommentShow}
          style={styles.space}>
          <SvgComponent />
        </TouchableOpacity>
        <Text style={styles.textAction}>{props.comment}</Text>
        <TouchableOpacity onPress={props.onPressSwitch} style={styles.space}>
          <SvgSwitch />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSearch} style={styles.space}>
          <SvgSend />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardView;
const RepostHeader = ({
  reposter,
  onUserNamePress,
}: {reposter: Reposter} & {
  onUserNamePress: (userId: string, userName: string) => void;
}) => {
  const name = reposter.fullName ? reposter.fullName : reposter.userName;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 25,
          paddingVertical: 10,
        }}>
        <Image
          style={{...styles.imgCar, width: 35, height: 35}}
          source={{uri: reposter.avatar}}
        />
        <View
          style={{
            flexDirection: 'column',
          }}>
          <TouchableOpacity
            onPress={() => {
              onUserNamePress(reposter._id, reposter.userName);
            }}
            style={{...styles.containerTick}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: colors.black,
                marginEnd: 10,
              }}>
              {name + ' '}
              <Text style={{color: colors.primaryColor, marginLeft: 10}}>
                đã đăng lại
              </Text>
            </Text>
            <SvgSwitch color={colors.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: 450,
          height: 1,
          borderWidth: 0.1,
          backgroundColor: '#E3E3E3',
        }}
      />
    </View>
  );
};
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
    marginBottom: 10,
  },
  containerTick: {
    flexDirection: 'row',
    marginStart: 12,
    justifyContent: 'space-between',
  },
  imgCar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
});
