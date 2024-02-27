import { ScrollView, StyleSheet, Text, View, FlatList, ImageSourcePropType, Alert } from 'react-native'
import React from 'react'
import Modal1 from './components/Modal'
import Header from './components/Header'
import CardView from './components/CardView'
import { useRef, useMemo, useState, useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { icons, images } from '@/assets';
import { colors } from '@/theme';
import ViewBottomSheet from './components/ViewBottomSheet'
import Toast from 'react-native-toast-message';
import { use } from 'i18next'
import SkeletonLoader from './components/SkeletonLoader'




interface DataItem {
  avatar: ImageSourcePropType;
  hour: string;
  title: string;
  description: string;
  tag?: string;
  image: ImageSourcePropType;
  star: number;
  comment: number;
  share: number;
}
const data: DataItem[] = [
  {
    avatar: images.logo,
    hour: "2 day ago",
    title: "Mercedes",
    description: "Introducing the new G63 model",
    tag: "Mercedes",
    image: images.xe,
    star: 1060,
    comment: 100,
    share: 50,
  },
  {
    avatar: images.logoNike,
    hour: "3h",
    title: "Nike",
    description: "Tell us how you style your Nike Acronym. Full techwear? Mix and match? Let us know 👀",
    tag: "Nike",
    image: images.avatar3,
    star: 800,
    comment: 400,
    share: 40,
  },
  {
    avatar: images.logo2,
    hour: "2h",
    title: "pewdiepie",
    description: "Green flag to those people who updates you because they know how you over thinking while waiting for them",
    image: images.avatar2,
    star: 1060,
    comment: 100,
    share: 50,
  },
  {
    avatar: images.logo3,
    hour: "12h",
    title: "Capypara",
    description: "Capypara swimming is so cute 🥰🥰🥰🥰",
    tag: "Puma #capypara #cuteduchua #animal",
    image: images.avatar4,
    star: 1809,
    comment: 600,
    share: 40,
  },
]
const HomeScreen = () => {
  const [check, setcheck] = useState<number>(1);
  const [ischeck, setischeck] = useState<boolean>(false)
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheet = useRef<BottomSheet>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [isBottomSheet, setisBottomSheet] = useState<boolean>(false);
  const snapPoints = useMemo(() => [265], []);
  const snapPoint = useMemo(() => [265], []);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<DataItem[]>([]);

  useEffect(() => {
    // Giả lập việc lấy dữ liệu mất 3 giây
    setTimeout(() => {
      setItems(data); // 'data' là dữ liệu của bạn
      setLoading(false);
    }, 3000);
  }, []);



  const toggleBottomSheet = () => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const toggleBottomSheet1 = () => {
    if (isBottomSheet) {
      bottomSheet.current?.close();
    } else {
      bottomSheet.current?.expand();
    }
    setisBottomSheet(!isBottomSheet);
  }
  const handleRadioSelect = (value: number) => {
    setcheck(value);
    bottomSheetRef.current?.close();
    setIsBottomSheetOpen(false);
  };
  const handleRadioSelect1 = (value: boolean) => {
    setischeck(false);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    // Alert.alert("You have successfully muted this account")
    showToast();
  };
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'You hide Mecedes’s post',
      visibilityTime: 2000,
      autoHide: true,
    });
  }
  const toastConfig = {
    success: (props: any) => (
      <View style={styles.CustumToast}>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: "400", marginStart: 10 }}>{props.text1}</Text>
      </View>
    ),
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View>
        <Modal1 />
        {
          loading ? (
          <FlatList
          ListHeaderComponent={<Header onPressToggle={toggleBottomSheet} />}
            data={Array.from({ length: 4 })} // Tạo một array tạm thời với 4 phần tử
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => <SkeletonLoader />}
          />
          ) : (
            <FlatList
              ListHeaderComponent={<Header onPressToggle={toggleBottomSheet} />}
              ListFooterComponent={<View style={{ height: 10 }} />}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CardView
                  avatar={item.avatar}
                  hour={item.hour}
                  title={item.title}
                  description={item.description}
                  tag={item.tag}
                  image={item.image}
                  star={item.star}
                  comment={item.comment}
                  share={item.share}
                  onPress={toggleBottomSheet1}
                />
              )}
            />
          )
        }

      </View>
      <View style={{ width: 406, height: "100%", flex: 1, position: 'absolute' }}>
        {isBottomSheetOpen && (
          <View style={styles.overlay} />
        )}

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
      <View style={{ width: 406, height: "100%", flex: 1, position: 'absolute' }}>
        {isBottomSheet && (
          <View style={styles.overlay} />
        )}
        <BottomSheet
          ref={bottomSheet}
          snapPoints={snapPoint}
          index={-1}
          onChange={(index) => {
            setisBottomSheet(index !== -1);
          }}
        >
          <ViewBottomSheet onPressToggle={() => handleRadioSelect1(true)} />
        </BottomSheet>
      </View>
      <Toast config={toastConfig} />
    </GestureHandlerRootView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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