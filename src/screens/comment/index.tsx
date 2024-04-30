import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '@/theme';
import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  HomeStackNames,
  HomeStackParamList,
} from '@/navigation/HomeNavigator/config';
import Svgback from '@/assets/icons/iconSVG/Back';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoginStackParamList} from '@/navigation/login';
import CardView from '@/screens/home/components/CardView';
import {icons} from '@/assets';
import AxiosInstance from '@/network/axiosInstance';

type PostDetailRouteProp = RouteProp<
  HomeStackParamList,
  HomeStackNames.CommentScreen
>;

const CommentScreen = () => {
  const route = useRoute<PostDetailRouteProp>();
  const itemData = route.params.post;
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  const screenWidth = Dimensions.get('window').width;
  const [textInput, setTextInput] = useState<string>('');

  const handlePushComment = async (postId: string) => {
    if (textInput !== '') {
      const data = {body: textInput};
      setTextInput('');
      await AxiosInstance().post(`post/comment/${postId}`, data);
    }
  };

  console.log(itemData.comments[0].repplies);

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
              <View
                style={[styles.commentContainer, {width: screenWidth - 48}]}>
                <Image
                  style={styles.avatar}
                  source={{uri: item.create_by.avatar}}
                />
                <View style={styles.commentBG}>
                  <Text style={styles.usernameComment}>
                    {item.create_by.fullName}
                  </Text>
                  <Text style={styles.contentComment}>{item.comment}</Text>
                </View>
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
            onSubmitEditing={Keyboard.dismiss}
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
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 18,
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
