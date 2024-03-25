import React, { useCallback, useMemo, useRef, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {colors} from '@/theme';
import AppBar from '@/screens/post/components/appBar';
import InputContent from '@/screens/post/components/inputContent';
import UserInfo from '@/screens/post/components/userInfo';
import ToolBar from '@/screens/post/components/toolBar';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import MediaContent from '@/screens/post/components/mediaContent';
import ListMediaContent from '@/screens/post/components/listMediaContent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from "@gorhom/bottom-sheet";
import { icons } from "@/assets";

const PostScreen = () => {
  const [medias, setMedias] = useState<Array<ImageOrVideo>>([]);
  const [toolBarHeight, setToolBarHeight] = useState<number>(0);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [ '40%'], []);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [audienceType, setAudienceType] = useState<number>(0);

  const toggleBottomSheet = () => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <AppBar />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
              <View style={styles.paddingHorizontal}>
                <UserInfo />
                <InputContent />
              </View>
              <View style={{paddingBottom: toolBarHeight, alignItems: 'center'}}>
                {medias.length === 0 ? null : medias.length === 1 ? (
                  <MediaContent media={medias[0]} />
                ) : (
                  <ListMediaContent medias={medias} />
                )}
              </View>
            </ScrollView>
          <ToolBar handlePresentModalPress={handlePresentModalPress} audienceType={audienceType} setMedias={setMedias} setToolBarHeight={setToolBarHeight} />
        </SafeAreaView>
        <View style={{width: '100%', height: '100%', flex: 1, position: 'absolute'}}>
          {isBottomSheetOpen && (
            <TouchableOpacity
              style={styles.overlay}
              onPress={toggleBottomSheet}
              activeOpacity={0.1}
            />
          )}
          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={index => {
              setIsBottomSheetOpen(index !== -1);
            }}>
            <View style={styles.bottomSheetContainer}>
              <Text style={styles.text}>Who can reply?</Text>
              <Text style={{marginTop: 12, fontSize: 16, fontWeight: '400'}}>
                Pick who can reply to this post
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: colors.neutralWhite4,
                  marginTop: 28,
                }}
              />
              <TouchableOpacity
                onPress={()=> {
                  setAudienceType(0);
                }}
                style={{flexDirection: 'row', marginTop: 28, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{width: 34, height: 24}} source={icons.planet} />
                  <Text style={styles.textWorl}>Worldwide</Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.radio}>
                    {audienceType == 0 ? <View style={styles.radio1} /> : null}
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> {
                  setAudienceType(1);
                }}
                style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{width: 34, height: 24}} source={icons.frame} />
                  <Text style={styles.textWorl}>Following </Text>
                </View>
                <TouchableOpacity >
                  <View style={styles.radio}>
                    {audienceType == 1 ? <View style={styles.radio1} /> : null}
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{setAudienceType(2)}}
                style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{width: 34, height: 24}} source={icons.ic_tag} />
                  <Text style={styles.textWorl}>Only people you mention</Text>
                </View>
                <TouchableOpacity >
                  <View style={styles.radio}>
                    {audienceType == 2 ? <View style={styles.radio1} /> : null}
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.neutralWhite4,
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.neutralBlack,
    alignItems: 'center',
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
  bottomSheetContainer: {
    height: 255,
    padding: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
  radio: {
    width: 20,
    height: 20,
    borderColor: colors.pink,
    borderWidth: 2,
    borderRadius: 15,
  },
});

export default PostScreen;
