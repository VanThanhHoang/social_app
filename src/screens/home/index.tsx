import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageSourcePropType,
  Alert,
} from 'react-native';
import React from 'react';
import Modal1 from './components/Modal';
import Header from './components/Header';
import CardView from './components/CardView';
import {useRef, useMemo, useState, useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {icons, images} from '@/assets';
import {colors} from '@/theme';
import ViewBottomSheet from './components/ViewBottomSheet';
import Toast from 'react-native-toast-message';
import SkeletonLoader from './components/SkeletonLoader';
import CustumToast from '@/components/Toast/CutomToast';
import CustomAlert from './components/CustomAlert';
import BottomSheetSwitch from './components/BottomSheetSwitch';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNames} from '@/navigation/HomeNavigator/config';
import {AppStackNames} from '@/navigation/config';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import {userInfoSelector} from '@/redux/test/userStore';
import {useTranslation} from 'react-i18next';
import {localStorage} from '@/utils';
import {useDispatch} from 'react-redux';
import {NewfeedAction} from '@/redux/action/newfeed.action';
import {Post} from '@/type';
import {NewFeedState} from '@/redux/slice/newfeed.slice';
import FooterList from './components/FooterList';
import FooterLastPageList from './components/FooterLastPageList';
const HomeScreen = () => {
  console.log('HomeScreen');
  const userInfo = useAppSelector(userInfoSelector);
  console.log(userInfo);
  const [check, setcheck] = useState<number>(1);
  const [ischeck, setischeck] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheet = useRef<BottomSheet>(null);
  const bottomSheet1 = useRef<BottomSheet>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [isBottomSheet, setisBottomSheet] = useState<boolean>(false);
  const [isBottomSheet1, setisBottomSheet1] = useState<boolean>(false);
  const snapPoints = useMemo(() => [265], []);
  const snapPoint = useMemo(() => [265], []);
  const snapPoint1 = useMemo(() => [176], []);
  const [loading, setLoading] = useState(true);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [selectedImage, setselectedImage] = useState<string | null>(null);
  const [ShowAlert, setShowAlert] = useState<boolean>(false);

  const toggleBottomSheet = () => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const toggleBottomSheet2 = () => {
    if (isBottomSheet1) {
      bottomSheet1.current?.close();
    } else {
      bottomSheet1.current?.expand();
    }
    setisBottomSheet1(!isBottomSheet1);
  };
  const toggleBottomSheet1 = (title: string, logo: string) => {
    setSelectedTitle(title);
    setselectedImage(logo);
    if (isBottomSheet) {
      bottomSheet.current?.close();
    } else {
      bottomSheet.current?.expand();
    }
    setisBottomSheet(!isBottomSheet);
  };
  const handleRadioSelect = (value: number) => {
    setcheck(value);
    bottomSheetRef.current?.close();
    setIsBottomSheetOpen(false);
  };
  const handleMute = (title: string) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    CustumToast({
      type: 'success',
      message: (
        <Text>
          {t('You have Mute ')}
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        </Text>
      ),
    });
  };
  const handleFollow = (title: string) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    CustumToast({
      type: 'success',
      message: (
        <Text>
          {t('You have Fllow ')}
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        </Text>
      ),
    });
  };
  const handleHide = (title: string) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    CustumToast({
      type: 'success',
      message: (
        <Text>
          {t('You have Hide ')}
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        </Text>
      ),
    });
  };
  const handleBlock = (title: string, logo: string | null) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    setShowAlert(true);
    setselectedImage(logo);
  };

  const toastConfig = {
    success: (props: any) => (
      <View style={styles.CustumToast}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '400',
            marginStart: 10,
          }}>
          {props.text1}
        </Text>
      </View>
    ),
    error: (props: any) => (
      <View style={styles.CustumToast2}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '400',
            marginStart: 10,
          }}>
          {props.text1}
        </Text>
      </View>
    ),
  };
  const isFirstLaunch = !localStorage.getBoolean('isFirstLaunch');
  localStorage.set('isFirstLaunch', false);
  const navigation = useNavigation<any>();
  const handleDetail = (item: any) => {
    navigation.navigate(AppStackNames.HomeNavigator, {
      screen: HomeStackNames.PostDetail,
      params: {post: item},
    });
  };

  const handleCommentShow = (item: any) => {
    navigation.navigate(AppStackNames.HomeNavigator, {
      screen: HomeStackNames.CommentScreen,
      params: {post: item},
    });
  };

  const {t} = useTranslation();
  // handle new feed
  const appDispatch = useAppDispatch();
  const {posts, currentPage, status, isLastPage}: NewFeedState = useAppSelector(
    state => state.newFeed,
  );
  useEffect(() => {
    const getNewfeedPromise = appDispatch(NewfeedAction.fetchNewFeed(1));
    return () => {
      getNewfeedPromise.abort();
    };
  }, []);
  const isFirstLoadData = () => {
    return posts.length == 0 && currentPage === 1;
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPressToggle={toggleBottomSheet} />

      {isFirstLoadData() && (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      )}
      <View>
        {!isFirstLaunch && <Modal1 />}
        <FlatList
          ListFooterComponent={() => {
            console.log('isLastPage', isLastPage);
            return isLastPage ? <FooterLastPageList /> : <FooterList />;
          }}
          onEndReachedThreshold={0.8}
          onEndReached={() => {
            appDispatch(NewfeedAction.fetchNewFeed(currentPage + 1));
          }}
          data={posts}
          keyExtractor={item => {
            return item._id;
          }}
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CardView
              key={item._id}
              style={{marginTop: 10}}
              avatar={item.author.avatar}
              hour={item.createdAt}
              title={item.author.userName}
              description={item.body}
              tag={''}
              share={2}
              image={item.media}
              star={item.reactions.length}
              comment={item.comments.length}
              onPress={() => toggleBottomSheet1(item.body, item.author.avatar)}
              onPressSwitch={toggleBottomSheet2}
              onPressDetail={() => handleDetail(item)}
              onPressCommentShow={() => handleCommentShow(item)}
              showView={true}
            />
          )}
        />
      </View>
      <View style={{width: 406, height: '100%', flex: 1, position: 'absolute'}}>
        {isBottomSheetOpen && (
          <TouchableOpacity
            style={styles.overlay}
            onPress={toggleBottomSheet}
            activeOpacity={0.1}
          />
        )}
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          onChange={index => {
            setIsBottomSheetOpen(index !== -1);
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.pick}>
              <Image style={styles.img} source={icons.backup} />
              <Text style={styles.text}>{t('Pick your new feed')}</Text>
            </View>
            <Text style={{marginTop: 8}}>
              {t('Choose what you want us to show you')}
            </Text>
            <View
              style={{
                width: 326,
                height: 1,
                borderWidth: 0.2,
                backgroundColor: colors.grey,
                marginTop: 27,
              }}
            />
            <TouchableOpacity
              onPress={() => handleRadioSelect(1)}
              style={{flexDirection: 'row', marginTop: 30}}>
              <Image style={{width: 34, height: 24}} source={icons.planet} />
              <Text style={styles.textWorl}>{t('Worldwide')}</Text>
              <TouchableOpacity style={styles.radioButton}>
                <View style={styles.radio}>
                  {check == 1 ? <View style={styles.radio1} /> : null}
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRadioSelect(2)}
              style={{flexDirection: 'row', marginTop: 20}}>
              <Image style={{width: 34, height: 24}} source={icons.frame} />
              <Text style={styles.textWorl}>{t('Following')} </Text>
              <TouchableOpacity style={styles.radioButton2}>
                <View style={styles.radio}>
                  {check == 2 ? <View style={styles.radio1} /> : null}
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
      <View style={{width: 406, height: '100%', flex: 1, position: 'absolute'}}>
        {isBottomSheet && (
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => toggleBottomSheet1('', '')}
            activeOpacity={0.1}
          />
        )}
        <BottomSheet
          ref={bottomSheet}
          snapPoints={snapPoint}
          index={-1}
          onChange={index => {
            setisBottomSheet(index !== -1);
          }}>
          <ViewBottomSheet
            onPressToggle={() => handleFollow(selectedTitle)}
            onPressMute={() => handleMute(selectedTitle)}
            onPressHide={() => handleHide(selectedTitle)}
            onPressBlock={() => handleBlock(selectedTitle, selectedImage)}
          />
        </BottomSheet>
      </View>
      <View style={{width: 406, height: '100%', flex: 1, position: 'absolute'}}>
        {isBottomSheet1 && (
          <TouchableOpacity
            style={styles.overlay}
            onPress={toggleBottomSheet2}
            activeOpacity={0.1}
          />
        )}
        <BottomSheet
          ref={bottomSheet1}
          snapPoints={snapPoint1}
          index={-1}
          onChange={index => {
            setisBottomSheet1(index !== -1);
          }}>
          <BottomSheetSwitch
            onPressReport={() => Alert.alert('Report')}
            onPressCaption={() => Alert.alert('Caption')}
          />
        </BottomSheet>
      </View>
      <CustomAlert
        visible={ShowAlert}
        title={selectedTitle}
        avatar={selectedImage}
        onClose={() => setShowAlert(false)}
      />
      <Toast config={toastConfig} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  CustumToast2: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    width: 356,
    height: 70,
    borderLeftColor: colors.red,
    borderRightColor: colors.red,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    justifyContent: 'center',
  },
  CustumToast: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    width: 356,
    height: 70,
    borderLeftColor: colors.purple,
    borderLeftWidth: 4,
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  contentContainer: {
    width: 407,
    height: 255,
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  pick: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 25,
    height: 24,
  },
  text: {
    marginStart: 12,
    fontSize: 24,
    color: colors.purple,
    fontWeight: '700',
  },
  textWorl: {
    marginStart: 16,
    fontSize: 18,
    color: colors.purple,
    fontWeight: '400',
  },
  radio1: {
    width: 10,
    height: 10,
    backgroundColor: colors.pink,
    borderRadius: 15,
    margin: 3,
  },
  radioButton: {
    marginLeft: 171,
    top: 3,
  },
  radioButton2: {
    marginLeft: 125,
    top: 3,
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: colors.pink,
    borderWidth: 2,
    borderRadius: 15,
  },
});
