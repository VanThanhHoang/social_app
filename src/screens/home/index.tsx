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
import CustumToast from '@/components/Toast/CutomToast'
import CustomAlert from './components/CustomAlert'
import BottomSheetSwitch from './components/BottomSheetSwitch'

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
  url?: string;
}
const data: DataItem[] = [
  {
    avatar: images.logoMessi,
    hour: "2 day ago",
    title: "Messi",
    description: "Una cosa que siempre me da buenas sensaciones… arrancar la nueva temporada con mis nuevos botines. Vamos @adidasfootball 👟💪",
    tag: "adidasfootball",
    image: images.messi,
    star: 15700,
    comment: 9696,
    share: 500,
  },
  {
    avatar: images.logoCr7,
    hour: "1 day ago",
    title: "Cristiano Ronaldo",
    description: "Until the very end! 👊 We keep going, no stopping!",
    tag: "CR7 🚀🚀🚀🚀🚀",
    image: images.cr7,
    star: 34060,
    comment: 10000,
    share: 6000,
  },
  {
    avatar: images.logo,
    hour: "2 day ago",
    title: "Mercedes",
    description: "Test",
    tag: "",
    image: "",
    star: 1060,
    comment: 100,
    share: 50,
  },
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
  const bottomSheet1 = useRef<BottomSheet>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [isBottomSheet, setisBottomSheet] = useState<boolean>(false);
  const [isBottomSheet1, setisBottomSheet1] = useState<boolean>(false)
  const snapPoints = useMemo(() => [265], []);
  const snapPoint = useMemo(() => [265], []);
  const snapPoint1 = useMemo(() => [176], []);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<DataItem[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedImage, setselectedImage] = useState<ImageSourcePropType | null>(null);
  const [ShowAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setItems(data);
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
  const toggleBottomSheet2 = () => {
    if (isBottomSheet1) {
      bottomSheet1.current?.close();
    } else {
      bottomSheet1.current?.expand();
    }
    setisBottomSheet1(!isBottomSheet1);
  };
  const toggleBottomSheet1 = (title: string, logo : ImageSourcePropType | null) => {
    setSelectedTitle(title);
    setselectedImage(logo);
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
  const handleMute = (title: string) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    CustumToast({ type: "success", message: "You have muted " + title });
  }
  const handleFollow = (title: string) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    CustumToast({ type: "success", message: "You have Follow " + title });
  }
  const handleHide = (title: string) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
    CustumToast({ type: "success", message: "You have Hide " + title });
  }
  const handleBlock = (title: string,logo : ImageSourcePropType | null ) => {
    setischeck(true);
    bottomSheet.current?.close();
    setIsBottomSheetOpen(false);
   setShowAlert(true);
   setselectedImage(logo);
  }

  const toastConfig = {
    success: (props: any) => (
      <View style={styles.CustumToast}>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: "400", marginStart: 10 }}>{props.text1}</Text>
      </View>
    ),
    error: (props: any) => (
      <View style={styles.CustumToast2}>
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
              data={Array.from({ length: 4 })}
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
                  url={item.url}
                  onPress={() => toggleBottomSheet1(item.title,item.avatar)}
                  onPressSwitch={toggleBottomSheet2}
                />
              )}
            />
          )
        }
      </View>
      <View style={{ width: 406, height: "100%", flex: 1, position: 'absolute' }}>
        {isBottomSheetOpen && (
          <TouchableOpacity style={styles.overlay} onPress={toggleBottomSheet} activeOpacity={0.1}>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.overlay} onPress={() => toggleBottomSheet1("", null)} activeOpacity={0.1}>
          </TouchableOpacity>
        )}
        <BottomSheet
          ref={bottomSheet}
          snapPoints={snapPoint}
          index={-1}
          onChange={(index) => {
            setisBottomSheet(index !== -1);
          }}
        >
          <ViewBottomSheet
            onPressToggle={() => handleFollow(selectedTitle)}
            onPressMute={() => handleMute(selectedTitle)}
            onPressHide={() => handleHide(selectedTitle)}
            onPressBlock={() => handleBlock(selectedTitle,selectedImage)}
            />
        </BottomSheet>
      </View>
      <View style={{ width: 406, height: "100%", flex: 1, position: 'absolute' }}>
        {isBottomSheet1 && (
          <TouchableOpacity style={styles.overlay} onPress={toggleBottomSheet2} activeOpacity={0.1}>
          </TouchableOpacity>
        )}
        <BottomSheet
          ref={bottomSheet1}
          snapPoints={snapPoint1}
          index={-1}
          onChange={(index) => {
            setisBottomSheet1(index !== -1);
          }}
        >
          <BottomSheetSwitch
            onPressReport={() => Alert.alert("Report")}
            onPressCaption={() => Alert.alert("Caption")}
          />
        </BottomSheet>
      </View>
      <CustomAlert visible={ShowAlert} title={selectedTitle}  avatar={selectedImage} onClose={() => setShowAlert(false)} />
      <Toast config={toastConfig} />
    </GestureHandlerRootView>
  )
}

export default HomeScreen

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