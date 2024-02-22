import React, { useRef, useMemo, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { icons } from '@/assets';
import { colors } from '@/theme';

const Header = () => {
    const [check, setcheck] = useState<number>(1);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false); // Thêm trạng thái để theo dõi

    const snapPoints = useMemo(() => [255], []);

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
        <GestureHandlerRootView style={{ height: "100%", width: "100%" }}>
            {isBottomSheetOpen && (
                <View style={styles.overlay} />
            )}
            <View style={styles.container}>
                <Image style={styles.logo} source={icons.logo} />
                <TouchableOpacity onPress={toggleBottomSheet}>
                    <Image style={styles.backup} source={icons.backup} />
                </TouchableOpacity>
            </View>
            <View style={{ width: 406, height: "100%", justifyContent: 'center', alignItems: 'center', position: "absolute" }}>
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
    );
};

export default Header;

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.5,
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
    text: {
        marginStart: 12,
        fontSize: 24,
        color: colors.purple,
        fontWeight: "700"
    },
    pick: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 25,
        height: 24,
    },
    contentContainer: {
        width: 407,
        height: 255,
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logo: {
        width: 36,
        height: 36,
    },
    backup: {
        width: 25,
        height: 24,
        marginTop: 5,
    },
});