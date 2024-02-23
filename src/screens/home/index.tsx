import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal1 from './components/Modal'
import Header from './components/Header'
import CardView from './components/CardView'
import { useRef, useMemo, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { icons } from '@/assets';
import { colors } from '@/theme';


const HomeScreen = () => {
  const [check, setcheck] = useState<number>(1);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const snapPoints = useMemo(() => [265], []);
  const toggleBottomSheet = () => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const handleRadioSelect = (value: number) => {
    setcheck(value);
    bottomSheetRef.current?.close();
    setIsBottomSheetOpen(false);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        {/* <Modal1 /> */}
        <Header onPressToggle={toggleBottomSheet} />
        <CardView />
        <CardView />
        <CardView />
        <CardView />

      </ScrollView>
      <View style={{ width: 406, height: "100%", flex: 1, position: 'absolute' }}>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          onChange={(index) => {
            setIsBottomSheetOpen(index !== -1);
          }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.pick}>
              <Image style={styles.img} source={icons.backup} />
              <Text style={styles.text}>Pick your new feed</Text>
            </View>
            <Text style={{ marginTop: 8 }}>Choose what you want us to show you</Text>
            <View style={{ width: 326, height: 1, borderWidth: 0.2, backgroundColor: colors.grey, marginTop: 27 }}></View>
            <TouchableOpacity onPress={() => handleRadioSelect(1)} style={{ flexDirection: "row", marginTop: 30 }}>
              <Image style={{ width: 34, height: 24 }} source={icons.planet} />
              <Text style={styles.textWorl}>Worldwide</Text>
              <TouchableOpacity style={styles.radioButton}>
                <View style={styles.radio}>
                  {check == 1 ? <View style={styles.radio1}></View> : null}
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRadioSelect(2)} style={{ flexDirection: "row", marginTop: 20 }}>
              <Image style={{ width: 34, height: 24 }} source={icons.frame} />
              <Text style={styles.textWorl}>Following  </Text>
              <TouchableOpacity style={styles.radioButton}>
                <View style={styles.radio}>
                  {check == 2 ? <View style={styles.radio1}></View> : null}
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>

    </GestureHandlerRootView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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
    fontWeight: "700"
  },
  textWorl: {
    marginStart: 16,
    fontSize: 18,
    color: colors.purple,
    fontWeight: "400"
  },
  radio1: {
    width: 10,
    height: 10,
    backgroundColor: colors.pink,
    borderRadius: 15,
    margin: 3
  },
  radioButton: {
    marginLeft: 171,
    top: 3
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: colors.pink,
    borderWidth: 2,
    borderRadius: 15,
  },
})