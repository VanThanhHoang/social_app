import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SvgAdd from '@/assets/icons/iconSVG/Add';
import { colors } from '@/theme';
import SvgMute from '@/assets/icons/iconSVG/Mute';
import SvgHide from '@/assets/icons/iconSVG/Hide';
import SvgBlock from '@/assets/icons/iconSVG/Block';


interface ViewBottomSheetProps {
    onPressToggle?: () => void;
    onPressMute?: () => void;
}
const ViewBottomSheet: React.FC<ViewBottomSheetProps> = ({ onPressToggle,onPressMute }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.follow} onPress={onPressToggle}>
                <SvgAdd style={styles.img} />
                <Text style={styles.textFollow}>Follow</Text>
            </TouchableOpacity>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.click} onPress={onPressMute}>
                    <SvgMute style={styles.img} />
                    <Text style={styles.textFollow}>Mute</Text>
                </TouchableOpacity>
                <View style={{ width: 326, height: 1, borderWidth: 0.1, backgroundColor: colors.grey, marginTop: 10 }} />
                <TouchableOpacity style={styles.click} onPress={onPressToggle}>
                    <SvgHide style={styles.img} />
                    <Text style={styles.textFollow}>Hide</Text>
                </TouchableOpacity>
                <View style={{ width: 326, height: 1, borderWidth: 0.1, backgroundColor: colors.grey, marginTop: 10 }} />
                <TouchableOpacity style={styles.click} onPress={onPressToggle}>
                    <SvgBlock style={styles.img} />
                    <Text style={styles.textFollow}>Block</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewBottomSheet

const styles = StyleSheet.create({
    click: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    container2: {
        width: 326,
        height: 140,
        marginTop: 16,
        backgroundColor: colors.greyLight,
        borderRadius: 10,
        alignSelf: "center",
    },
    img: {
        marginStart: 24
    },
    container: {
        width: 407,
        height: 255,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.white,
    },
    follow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.greyLight,
        borderRadius: 10,
        width: 330,
        height: 50,
        alignSelf: "center",
    },
    textFollow: {
        fontSize: 18,
        fontWeight: "400",
        color: colors.black,
        marginStart: 20,
    }

})