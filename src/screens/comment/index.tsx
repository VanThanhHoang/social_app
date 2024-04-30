import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '@/theme';
import React, {useRef, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  HomeStackNames,
  HomeStackParamList,
} from '@/navigation/HomeNavigator/config';
import Svgback from '@/assets/icons/iconSVG/Back';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CardView from '@/screens/home/components/CardView';
import {icons} from '@/assets';
import AxiosInstance from '@/network/axiosInstance';
import {Comment} from '@/type';
import {AppStackNames} from '@/navigation/config';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import {userInfoSelector} from '@/redux/test/userStore';

type PostDetailRouteProp = RouteProp<
  HomeStackParamList,
  HomeStackNames.CommentScreen
>;

const CommentScreen = () => {
  const userInfo = useAppSelector(userInfoSelector);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const appDispatch = useAppDispatch();
  const route = useRoute<PostDetailRouteProp>();
  const itemData = route.params.post;
  const screenWidth = Dimensions.get('window').width;
  const [textInput, setTextInput] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  const [reply, setReply] = useState<string>('');

  const handlePushComment = async (postId: string) => {
    if (textInput !== '') {
      inputRef.current?.blur();
      const data =
        reply === '' ? {body: textInput} : {body: textInput, repply_to: reply};
      setTextInput('');
      setReply('');
      await AxiosInstance().post(`post/comment/${postId}`, data);
    }
  };

  const onUserNamePress = (userId: string, userName: string): void => {
    if (userId !== userInfo._id) {
      navigation.navigate(AppStackNames.HomeNavigator, {
        screen: HomeStackNames.UserProfileDetail,
        params: {userId: userId, userName: userName},
      });
    }
  };

  const handleReply = (item: Comment) => {
    inputRef.current?.focus();
    setReply(item._id);
    setTextInput(`${item.create_by.fullName}: `);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.goBack();
          }}>
          <Svgback />
          <Text style={styles.Back}>Back</Text>
        </TouchableOpacity>
        <ScrollView>
          <CardView
            fullName={itemData.author.fullName}
            isLike={itemData.isLiked}
            _id={itemData._id}
            userId={itemData.author._id}
            avatar={itemData.author.avatar}
            hour={itemData.createdAt}
            title={itemData.author.userName}
            description={itemData.body}
            tag={''}
            image={itemData.media}
            star={itemData.reactions.length}
            comment={itemData.comments.length}
            url={''}
          />
          <View style={styles.divider} />
          <FlatList
            scrollEnabled={false}
            data={itemData.comments}
            renderItem={({item}) => (
              <View>
                <View
                  style={[styles.commentContainer, {width: screenWidth - 48}]}>
                  <Image
                    style={styles.avatar}
                    source={{uri: item.create_by.avatar}}
                  />
                  <View>
                    <View style={styles.commentBG}>
                      <TouchableOpacity
                        onPress={() =>
                          onUserNamePress(
                            item.create_by._id,
                            item.create_by.fullName,
                          )
                        }>
                        <Text style={styles.usernameComment}>
                          {item.create_by.fullName}
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.contentComment}>{item.comment}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleReply(item)}
                      style={{marginLeft: 36}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          color: colors.neutralWhite1,
                        }}>
                        Reply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <FlatList
                  scrollEnabled={false}
                  data={item.repplies}
                  renderItem={({item}) => (
                    <View
                      style={[
                        styles.commentReplyContainer,
                        {width: screenWidth - 48},
                      ]}>
                      <Image
                        style={styles.avatarReply}
                        source={{uri: item.create_by.avatar}}
                      />
                      <View style={styles.commentBG}>
                        <TouchableOpacity
                          onPress={() =>
                            onUserNamePress(
                              item.create_by._id,
                              item.create_by.fullName,
                            )
                          }>
                          <Text style={styles.usernameComment}>
                            {item.create_by.fullName}
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.contentComment}>
                          {item.comment}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            )}
          />
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            ref={inputRef}
            multiline={true}
            placeholder="Comment"
            value={textInput}
            onChangeText={text => setTextInput(text)}
            style={styles.textInputStyle}
          />
          <TouchableOpacity onPress={() => handlePushComment(itemData._id)}>
            <Image source={icons.ic_send} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Back: {
    fontSize: 18,
    marginLeft: 8,
    color: colors.black,
    fontWeight: '500',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 18,
    paddingBottom: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 32,
  },
  avatarReply: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  commentReplyContainer: {
    flexDirection: 'row',
    paddingLeft: 84,
    paddingTop: 12,
  },
  divider: {
    marginHorizontal: 18,
    height: 0.5,
    backgroundColor: colors.gray,
  },
  commentBG: {
    marginLeft: 12,
    backgroundColor: colors.neutralWhite5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  contentComment: {
    color: colors.black,
    fontSize: 16,
  },
  usernameComment: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    backgroundColor: colors.neutralWhite5,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
  },
});
