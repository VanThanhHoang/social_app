import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IconShare from '@/assets/icons/IconShare'
import Icontick from '@/assets/icons/Icontick'
import IconLink from '@/assets/icons/IconLink'
import IconStar from '@/assets/icons/IconStar'

const ProfileUser = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.AvatarContainer}>
                <View>
                    <Image source={require('@/assets/images/backgroundavatarprofile.png')} style={styles.BackgroundAvatar} />
                    <Image source={require('@/assets/images/nytao.png')} style={styles.AvatarStyle} />
                </View>
                <View style={styles.EditProfileContainer}>
                    <TouchableOpacity style={styles.ButtonEditProfileStyle}>
                        <Text style={styles.EditProfileTextStyle}>Edit profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonShareStyle}>
                        <IconShare />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.NameContainer}>
                <Text style={styles.NameTextStyle}>BiCenzo Quasano</Text>
                <Icontick />
            </View>
            <View style={styles.StoryContainer}>
                <Text style={styles.StoryTextStyle}>Best rapper alive</Text>
                <Text style={styles.StoryTextStyle}>Contact for work : travis@utopia.com</Text>
                <Text style={styles.StoryTextStyle}>Mr. Bincenzo: 070605894</Text>
                <View style={styles.LinkContainer}>
                    <IconLink />
                    <Text style={styles.LinkTextStyle}>youtube/travisscott.com</Text>
                </View>
            </View>
            <View style={styles.FollowerContainer}>
                <View style={styles.FollowerItemContainer}>
                    <Text style={styles.FollowQuantity}>1.5M</Text>
                    <Text style={styles.FollowTextStyle}>followers</Text>
                </View>
                <IconStar style={styles.IconStarStyle} />
                <View style={styles.FollowerItemContainer}>
                    <Text style={styles.FollowQuantity}>1.5M</Text>
                    <Text style={styles.FollowTextStyle}>following</Text>
                </View>
            </View>
            <View style={styles.PeopleFollowerContainer}>
                <View style={styles.ImagePeopleContainer}>
                    <Image source={require('@/assets/images/nytao.png')} style={styles.AvatarPeopleStyle} />
                    <Image source={require('@/assets/images/nytao.png')} style={[styles.AvatarPeopleStyle, styles.OverlapAvatar]} />
                    <Image source={require('@/assets/images/nytao.png')} style={[styles.AvatarPeopleStyle, styles.OverlapAvatar]} />
                </View>
                <Text style={styles.FollowPeopleTextStyle}>Followed by Quan Hoang, lanhhni, Everyday Astronaut, Pewdiepie</Text>
            </View>
        </View>
    )
}

export default ProfileUser

const styles = StyleSheet.create({
    FollowPeopleTextStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: '#767676',
        marginLeft: 8,
        width: 310,
    },
    OverlapAvatar: {
        marginLeft: -10,
    },
    AvatarPeopleStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    ImagePeopleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    PeopleFollowerContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    FollowTextStyle: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: '#767676',
    },
    FollowQuantity: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: '#3F3E3E',
        marginRight: 3,
    },
    IconStarStyle: {
        marginLeft: 8,
        marginRight: 8,
    },
    FollowerItemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FollowerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },
    LinkTextStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: '#5E4EA0',
        marginLeft: 8,
    },
    LinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    StoryTextStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: '#3F3E3E',
    },
    StoryContainer: {
        marginTop: 10,
    },
    NameTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        color: '#2C2B2B',
        marginRight: 8,
    },
    NameContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        alignItems: 'center',
    },
    ButtonShareStyle: {
        width: 40,
        height: 40,
        padding: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C8C8C8',
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    EditProfileTextStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: '#2C2B2B',
        textAlign: 'center',
    },
    ButtonEditProfileStyle: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C8C8C8',
    },
    EditProfileContainer: {
        flexDirection: 'row',
    },
    BackgroundAvatar: {
        width: 138,
        height: 138,
    },
    AvatarStyle: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: 50,
    },
    AvatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Container: {
        padding: 16,
        
    }
})