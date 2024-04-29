import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '@/theme';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  HomeStackNames,
  HomeStackParamList,
} from '@/navigation/HomeNavigator/config';
import Svgback from '@/assets/icons/iconSVG/Back';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoginStackParamList} from '@/navigation/login';
import CardView from '@/screens/home/components/CardView';

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
                    {item.create_by.userName}
                  </Text>
                  <Text style={styles.contentComment}>{item.comment}</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
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
    backgroundColor: colors.greyLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  contentComment: {
    color: colors.black,
    fontSize: 16,
  },
  usernameComment: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '700',
  },
});
