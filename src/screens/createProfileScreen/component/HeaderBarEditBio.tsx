import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface HeaderBarEditBioProps {
    backProfile: string,
    title: string,
    done: string,
    onPress?: () => void
}

const HeaderBarEditBioProps: React.FC<HeaderBarEditBioProps> =  ({
    backProfile,
    title,
    done,
    onPress
}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.HeaderBar}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.TitleCancel}>{backProfile}</Text>
                </TouchableOpacity>
                <Text style={styles.EditBio}>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.Done}>{done}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HeaderBarEditBioProps

const styles = StyleSheet.create({
    Done: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#5E4EA0',
        fontWeight: '700',
    },
    EditBio: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000',
        fontWeight: '700',
    },
    TitleCancel: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000',
        fontWeight: '400',

    },
    HeaderBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Container: {
        backgroundColor: 'white',
    },
})